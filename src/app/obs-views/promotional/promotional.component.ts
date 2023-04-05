import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IntervalRequestService } from 'src/services/interval-request.service';

@Component({
  selector: 'app-promotional',
  templateUrl: './promotional.component.html',
  styleUrls: ['./promotional.component.scss']
})
export class PromotionalComponent implements OnInit {
  promotii: any[] = [];
  offer:any;
  offerId:string;
  offerIdx:string;
  constructor(intervalRequest: IntervalRequestService,private activatedRoute: ActivatedRoute) {
    this.activatedRoute.queryParams.subscribe(params => {
      this.offerId = params['offer'];
      intervalRequest.requestPromotions().subscribe((data: any) => {
        this.promotii = data;
        this.promotii = this.promotii.sort((x, y) => {
          if (x.rating > y.rating)
          return -1;
          else
          return 1
        });
        
        this.setOffer();
      })
    });
    
  }
  setOffer() {
    this.offer = this.promotii.find(x=>String(x.name).trim().replace(/\s/g, '') == this.offerId.replace(/\s/g, ''));
    
  }
  
  ngOnInit(): void {
  }
  
}
