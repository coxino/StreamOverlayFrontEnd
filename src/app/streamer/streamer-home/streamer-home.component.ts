import { Component, Injector, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { StreamerPageBase } from 'src/Factory/StreamerPageBase';
import { StreamerpagerequestsService } from 'src/services/streamerpagerequests.service';
import { UserdataService } from '../userdata.service';

@Component({
  selector: 'app-streamer-home',
  templateUrl: './streamer-home.component.html',
  styleUrls: ['./streamer-home.component.scss']
})

export class StreamerHomeComponent extends StreamerPageBase implements OnInit {
  
  constructor(requestService:StreamerpagerequestsService,
    routeService:ActivatedRoute,
    toastrService:ToastrService,
    userdataService:UserdataService) {
    super(requestService,routeService,toastrService,userdataService);
  }
  
  ngOnInit(): void {
    
  }
}
