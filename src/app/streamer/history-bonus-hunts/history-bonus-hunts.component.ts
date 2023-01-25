import { Component, Injector, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { StreamerPageBase } from 'src/Factory/StreamerPageBase';
import { StreamerpagerequestsService } from 'src/services/streamerpagerequests.service';
import { UserdataService } from '../userdata.service';

@Component({
  selector: 'app-history-bonus-hunts',
  templateUrl: './history-bonus-hunts.component.html',
  styleUrls: ['./history-bonus-hunts.component.scss']
})
export class HistoryBonusHuntsComponent extends StreamerPageBase implements OnInit {

  constructor(requestService:StreamerpagerequestsService,
    routeService:ActivatedRoute,
    toastrService:ToastrService,
    userdataService:UserdataService) {
    super(requestService,routeService,toastrService,userdataService);
  }
  

  ngOnInit(): void {
  }

}
