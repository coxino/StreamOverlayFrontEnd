import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { StreamerPageBase } from 'src/Factory/StreamerPageBase';
import { StreamerpagerequestsService } from 'src/services/streamerpagerequests.service';
import { UserdataService } from '../userdata.service';

@Component({
  selector: 'app-casinos',
  templateUrl: './casinos.component.html',
  styleUrls: ['./casinos.component.scss']
})
export class CasinosComponent extends StreamerPageBase implements OnInit {
  promotii: any[] = [];
  constructor(requestService: StreamerpagerequestsService,
    routeService: ActivatedRoute,
    toastrService: ToastrService,
    userdataService: UserdataService) {
    super(requestService, routeService, toastrService, userdataService);
    requestService.requestPromotions(userdataService.StreamerProfilePage.streamerID).subscribe((data: any) => {
      this.promotii = data;
      this.promotii = this.promotii.sort((x, y) => {
        if (x.rating > y.rating)
          return -1;
        else
          return 1
      });
    })
  }

  hasClicked(promoname:string)
  {
    this.requestService.hasClicked(this.userdataService.StreamerProfilePage.streamerID,promoname).subscribe(data=>{});
  }

  ngOnInit(): void {
  }

}
