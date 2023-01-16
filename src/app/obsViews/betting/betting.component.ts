import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { Settings } from 'src/assets/database/Models/databaseStructure';
import { BettingModel } from 'src/models/betting-model';
import { IntervalRequestService } from 'src/services/interval-request.service';

@Component({
  selector: 'app-betting',
  templateUrl: './betting.component.html',
  styleUrls: ['./betting.component.scss']
})
export class BettingComponent implements OnInit {
  totalVoturi = 0;
  totalFise = 0;
  timer = "";
  seconds:number = 1200;
  beturi: BettingModel = new BettingModel();
  timer$ = interval(2000);
  timer2$ = interval(1000);
  loadingOver = false;
  IsAnimatedBorder = false;
  
  //didRefreshed = false;
  serverRequest(){
    this.intervalRequest.apiGetRequest(Settings.LiveBetting).subscribe((data:any) =>{	
      var xcnt = 0;
      
      this.beturi.maxBet = data.maxBet;
      this.beturi.voteTitle = data.voteTitle;

      if(this.beturi.options.length > 0){
        this.beturi.options.forEach(bet => { 
          if(bet.nume != data.options[xcnt].nume)
          {
            this.beturi.options =  [];
            return;
          }
          bet.isVisible = data.options[xcnt].isVisible;
          bet.optiune = data.options[xcnt].optiune;
          bet.progress = data.options[xcnt].progress;
          bet.totalPariat = data.options[xcnt].totalPariat;
          bet.voturi = data.options[xcnt].voturi;
          xcnt++;    
          if(bet.isVisible == false && bet.didRefreshed == false){
            var newInterval = interval(1000).subscribe(obs=>{
              bet.didRefreshed = true;
            });
          }        
        });
      }
      else
      {
        this.beturi = data;
        this.beturi.options.forEach(bet => { 
          if(bet.isVisible == false && bet.didRefreshed == false){
            var newInterval = interval(1000).subscribe(obs=>{
              bet.didRefreshed = true;
            });
          }
        });
      }
      this.totalVoturi = this.beturi.options.map(x=>x.voturi).reduce((x,y)=> x+y);
      this.totalFise = this.beturi.options.map(x=>x.totalPariat).reduce((x,y)=> x+y);       
    });
  }
  constructor(private intervalRequest: IntervalRequestService) { 
    this.serverRequest();		
    this.timer$.subscribe(()=>{			
      this.serverRequest();       
    }); 
    var obs = this.timer2$.subscribe(()=>{
      this.seconds --;

      if(this.seconds >= 0){
      var minutes = Math.floor(this.seconds / 60);
      var secs = this.seconds - (minutes * 60);
      this.timer = minutes.toLocaleString('en-US', {
        minimumIntegerDigits: 2,
        useGrouping: false
      }) + ":" + secs.toLocaleString('en-US', {
        minimumIntegerDigits: 2,
        useGrouping: false
      });
      }
      else{
        obs.unsubscribe();
        this.timer = "INCHIS";
      }
    });
    this.intervalRequest.apiGetRequest(Settings.CustomTheme).subscribe((data:any) =>{	
      this.IsAnimatedBorder = data.Options.animatedBorder;        
        this.loadingOver = true;        
    });
  }
  
  ngOnInit(): void {
  }
  
}