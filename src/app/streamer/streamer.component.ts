import { AfterContentInit, AfterViewInit, Component, OnInit } from '@angular/core';
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
export class StreamerComponent extends StreamerPageBase implements OnInit, AfterViewInit, AfterContentInit {
  
  IsModalOpen: boolean = false;
  IsGDPRModalOpen: boolean = false;
  agreeGDPR = false;
  hystoryModal = false;
  currentPage = 0;
  
  hystory: any[] = [];
  constructor(requestService: StreamerpagerequestsService,
    routeService: ActivatedRoute,
    toastrService: ToastrService,
    userdataService: UserdataService) {
      super(requestService, routeService, toastrService, userdataService);
      
    }
    ngAfterContentInit(): void {
      
      if (!this.userdataService.IsLoggedin()) {
        this.IsGDPRModalOpen = true;
      }
    }
    
    NextHystory() {
      if(this.hystory.length > 9){
        this.currentPage++;
      }
      this.GetHystory();
    }
    
    GetHystory() {
      this.requestService.getUserHystory(this.userdataService.ViewerLoginProfile.LocalUserToken, this.userdataService.StreamerProfilePage.streamerID, this.currentPage).subscribe((data: any) => {
        this.hystory = data.hystory;
      });
    }
    
    FirstHystory() {
      this.currentPage = 0;
      this.GetHystory();
    }
    
    PreviusHystory() {
      if (this.currentPage > 0) {
        this.currentPage--;
        this.GetHystory();
      }
    }
    
    ToggleHystory() {
      this.currentPage = 0;
      this.hystoryModal = !this.hystoryModal;
      this.GetHystory();
    }
    
    ngAfterViewInit(): void {
      this.refreshPoints();
      this.userdataService.GetSetreamerSettingsForCurrentPage();
    }
    
    OpenSettings() {
      this.IsModalOpen = !this.IsModalOpen;
    }
    
    ToggleGRPRModal() {
      this.IsGDPRModalOpen = !this.IsGDPRModalOpen;
    }
    
    SaveSettings() {
      this.userdataService.SaveUserSettingsForCurrentPage();
      this.OpenSettings();
    }
    
    ngOnInit(): void {
      
    }
    
    IsLoggedin() {
      return this.userdataService.IsLoggedin();
    }
    
    ProfilePicture(): any {
      return this.userdataService.ViewerLoginProfile.ProfilePicture;
    }
    
    loginWithGoogle() {
      this.userdataService.loginWithGoogle();
    }
    
    twitchLoginCallback($event: any) {
      this.userdataService.twitchLoginCallback($event);
    }
    
    refreshPoints() {
      console.log(JSON.stringify(this.userdataService.StreamerProfilePage.streamerID));
      this.refresh = true;
      this.userdataService.GetUserCoins(() => {
        this.toastrService.success('Up to Date');
        this.refresh = false;
      });
    }
    
    StreamerProfilePicture() {
      return this.userdataService.StreamerProfilePage.Infos.profilePicture;
    }
    
  }
  