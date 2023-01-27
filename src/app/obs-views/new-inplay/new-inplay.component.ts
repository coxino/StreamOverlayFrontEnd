import { Component, OnInit } from '@angular/core';
import { Settings } from 'src/assets/database/Models/databaseStructure';
import { ThemedComponent } from 'src/Factory/ThemedComponent';
import { GameHolderService } from 'src/services/game-holder.service';
import { IntervalRequestService } from 'src/services/interval-request.service';

@Component({
  selector: 'app-new-inplay',
  templateUrl: './new-inplay.component.html',
  styleUrls: ['./new-inplay.component.scss']
})
export class NewInplayComponent extends ThemedComponent implements OnInit {
  currentGame: any;
  rounds:any[];
  
  avgWins:any;
  topMultyBet: any;
  topPayX: any;
  topMultyPay: any;
  topPayBet: any;
  topMultyX: any;
  topPay:any;
  
  serverRequest = ()=> {
    this.intervalRequest.apiGetRequest(Settings.LiveGame).subscribe((data:any) =>{
      this.currentGame = data.game;
      this.rounds = data.game.rounds;
      
      if(this.rounds.length > 0){
        this.topPay = this.rounds.reduce((a,b)=> Math.max(a,b.payAmount),0);
        this.topPayBet = this.rounds.find(x=>x.payAmount == this.topPay)?.betSize ?? 0;
        this.topPayX = this.rounds.find(x=>x.payAmount == this.topPay)?.multiplier ?? 0;
        
        this.topMultyX = this.rounds.reduce((a,b)=> Math.max(a,b.multiplier),0);
        this.topMultyBet = this.rounds.find(x=>x.multiplier == this.topMultyX)?.betSize ?? 0;
        this.topMultyPay = this.rounds.find(x=>x.multiplier == this.topMultyX)?.payAmount ?? 0;
        
        this.avgWins = this.rounds.reduce((a,b)=> a+b.payAmount,0) / this.rounds.length;
      }  
      else{
        this.topPay = 0;
        this.topPayBet =  0;
        this.topPayX =  0;
        
        this.topMultyX = 0;
        this.topMultyBet =  0;
        this.topMultyPay =  0;
      }
    },()=>{},()=>{this.loadingOver = true;});
  }
  
  constructor(intervalRequest: IntervalRequestService,public gameHolderService:GameHolderService) {
    super(intervalRequest);
  }
  
  ngOnInit(): void {
  }
}
