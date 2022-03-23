import { Component, OnInit } from '@angular/core';
import { Settings } from 'src/assets/database/Models/databaseStructure';
import { IntervalRequestService } from 'src/services/interval-request.service';

import { interval } from 'rxjs';

@Component({
  selector: 'app-bonus-hunt-end',
  templateUrl: './bonus-hunt-end.component.html',
  styleUrls: ['./bonus-hunt-end.component.scss']
})
export class BonusHuntEndComponent implements OnInit {  
  BonusHundEndOnProfit = false;
  Profit:boolean = false;
  timer$ = interval(2000);
  

  constructor(intervalRequest: IntervalRequestService) {     
    this.timer$.subscribe(()=>{
      intervalRequest.apiGetRequest(Settings.AnimationController).subscribe((data:any)=>{
        this.Profit = data.ProfitAnimation.Profit;
        this.BonusHundEndOnProfit = data.ProfitAnimation.BonusHundEndOnProfit;
      });
    });
  }

  ngOnInit(): void {
  }
}