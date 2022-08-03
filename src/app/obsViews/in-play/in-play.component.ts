import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { Settings } from 'src/assets/database/Models/databaseStructure';
import { SiteSettings } from 'src/assets/SiteSettings';
import { Round } from 'src/models/round-model';
import { IntervalRequestService } from 'src/services/interval-request.service';

@Component({
  selector: 'app-in-play',
  templateUrl: './in-play.component.html',
  styleUrls: ['./in-play.component.scss']
})
export class InPlayComponent implements OnInit {
  
  showOff = false;
  timer = 0;  
  bonusHuntPreInfo:any;
  currentGame:any;
  currentBalance:any;
  currencyCode = SiteSettings.currency;
  gameHighestPay: Round = new Round();
  gameHighestX: Round = new Round();
  inHuntNumber:string = "";
  timer$ = interval(3000);
  IsAnimatedBorder = false;
  serverRequest(){
    this.intervalRequest.apiGetRequest(Settings.LiveGame).subscribe((data:any) =>{  
      this.timer ++;
      if(this.timer > 5)
      {  
      this.showOff = !this.showOff;   
      this.timer = 0;
      }
      this.inHuntNumber = data.inHuntNumber;
      this.bonusHuntPreInfo = data.bonusHuntPreInfo;
      this.currentGame = data.game;
      console.log("" + JSON.stringify(this.bonusHuntPreInfo));
      
      this.gameHighestPay = new Round();        
      this.currentGame.rounds.forEach((element:any ) => {
        if(element.payAmount > this.gameHighestPay.PayAmount){
          this.gameHighestPay.PayAmount = element.payAmount;
          this.gameHighestPay.BetSize = element.betSize;
          this.gameHighestPay.Multiplier = element.multiplier;
        }
        if(element.multiplier >= this.gameHighestPay.Multiplier){
          this.gameHighestX.PayAmount = element.payAmount;
          this.gameHighestX.BetSize = element.betSize;
          this.gameHighestX.Multiplier = element.multiplier;
        }
        
      });      
    });
  }
  
  constructor(private intervalRequest: IntervalRequestService) {    
    this.serverRequest();		
    this.timer$.subscribe(()=>{			
      this.serverRequest(); 
    }); 
    this.intervalRequest.apiGetRequest(Settings.CustomTheme).subscribe((data:any) =>{	
			this.IsAnimatedBorder = data.Options.animatedBorder;    
		  });
  }
  ngOnInit(): void {
    
  }
  
}
