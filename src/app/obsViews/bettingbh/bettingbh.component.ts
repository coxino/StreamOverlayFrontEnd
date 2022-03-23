import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { Settings } from 'src/assets/database/Models/databaseStructure';
import { BettingModel } from 'src/models/betting-model';
import { IntervalRequestService } from 'src/services/interval-request.service';

@Component({
  selector: 'app-bettingbh',
  templateUrl: './bettingbh.component.html',
  styleUrls: ['./bettingbh.component.scss']
})
export class BettingbhComponent implements OnInit {
  totalVoturi = 0;
  totalFise = 0;
  timer = "";
  startTime = Date.now();
  beturi: BettingModel[] = [];
  timer$ = interval(3000);
  timer2$ = interval(1000);
  seconds:number = 1200;
  loadingOver = false;
  serverRequest(){
    this.intervalRequest.apiGetRequest(Settings.LiveBetting).subscribe((data:any) =>{	 
      this.beturi = data;
      this.totalVoturi = this.beturi.map(x=>x.voturi).reduce((x,y)=> x+y);
      this.totalFise = this.beturi.map(x=>x.totalPariat).reduce((x,y)=> x+y);
      if(this.loadingOver == false)
      {
        this.loadingOver = true;
      } 
    });
  }
  constructor(private intervalRequest: IntervalRequestService) { 
    this.serverRequest();		
    this.timer$.subscribe(()=>{			
      this.serverRequest();       
    }); 
    this.timer2$.subscribe(()=>{
      this.seconds --;
      var minutes = Math.floor(this.seconds / 60);
      var secs = this.seconds - (minutes * 60);
      this.timer = minutes + ":" + secs.toString();
    });
  }
  
  ngOnInit(): void {
  }

}
