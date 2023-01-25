import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { StreamerPageBase } from 'src/Factory/StreamerPageBase';
import { StreamerpagerequestsService } from 'src/services/streamerpagerequests.service';
import { UserdataService } from './userdata.service';

@Component({
  selector: 'app-streamer',
  templateUrl: './streamer.component.html',
  styleUrls: ['./streamer.component.scss']
})
export class StreamerComponent extends StreamerPageBase implements OnInit, AfterViewInit {
  
  refresh = false;

  constructor(requestService:StreamerpagerequestsService,
    routeService:ActivatedRoute,
    toastrService:ToastrService,
    userdataService:UserdataService) {
    super(requestService,routeService,toastrService,userdataService);
      
  }
  ngAfterViewInit(): void {
    this.refreshPoints();
  }
  
  ngOnInit(): void {
  }
  
  IsLoggedin()
  {
    return this.userdataService.IsLoggedin();
  }

  ProfilePicture():any
  {
    return this.userdataService.ViewerLoginProfile.ProfilePicture;
  }

  loginWithGoogle()
  {
    this.userdataService.loginWithGoogle();
  }

  twitchLoginCallback($event:any){
    this.userdataService.twitchLoginCallback($event);
  }

  refreshPoints()
  {
    this.refresh = true;
    this.userdataService.GetUserCoins(()=>{
      this.toastrService.success('Up to Date');      
      this.refresh = false;
    });
  }
  
}
