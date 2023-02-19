import { TEMPORARY_NAME } from '@angular/compiler/src/render3/view/util';
import { Component, OnInit } from '@angular/core';
import { Settings } from 'src/assets/database/Models/databaseStructure';
import { RumbleTeam, SlotsRumbleModel } from 'src/assets/database/Models/SlotsRumbleModel';
import { ThemedComponent } from 'src/Factory/ThemedComponent';
import { GameHolderService } from 'src/services/game-holder.service';
import { IntervalRequestService } from 'src/services/interval-request.service';

@Component({
  selector: 'app-royale-rumble',
  templateUrl: './royale-rumble.component.html',
  styleUrls: ['./royale-rumble.component.scss']
})
export class RoyaleRumbleComponent extends ThemedComponent implements OnInit {
  SlotsRumbleModel = new SlotsRumbleModel();
  TopPayGame=new RumbleTeam();
  TopKillsGame=new RumbleTeam();
  TopShitGame=new RumbleTeam();
  allgames:RumbleTeam[];
  serverRequest = ()=>{
    this.intervalRequest.apiGetRequest(Settings.SlotsRumble).subscribe((data:any) =>{
      this.SlotsRumbleModel = data;
      if(this.SlotsRumbleModel.gameHistory.length <= 1)
      {
        this.TopPayGame.gameName = "Top Pay Game";
        this.TopKillsGame.gameName = "Most Kills";
        this.TopShitGame.gameName = "Best Multi Game";
        return;
      }
      this.allgames = [...this.SlotsRumbleModel.gameHistory.map(x=>x.team1)].concat([...this.SlotsRumbleModel.gameHistory.map(x=>x.team2)]);
      
      let uniqueElements = [...new Set(this.allgames)];
      var elementCounts = uniqueElements.map(value => [value, this.allgames.filter(str => str.gameName === value.gameName).length]);
      this.maxKills = -1;
      var bestPay = -1;
      var worstPay = 999999;
      var foundTopKills;
      var foundTopShit;
      var foundTopPay;
      
      //MOST KILLS
      elementCounts.forEach(element => { 
        console.log(JSON.stringify(element[0])+":"+element[1]);
        console.log(JSON.stringify(element[1] > this.maxKills));
        if(element[1] > this.maxKills)
        {         
          this.maxKills = Number(element[1]);
          foundTopKills = element[0];
        }
      });
      this.TopKillsGame = foundTopKills;
      
      var allPays = this.allgames.map(x=>x.payout);
      this.maxPayout = this.allgames.reduce((max, team) => {
        return Math.max(max, team.payout);
      }, -Infinity);
      
      this.TopPayGame = this.allgames.find(x=>x.payout == this.maxPayout);
      
      this.maxX = this.allgames.filter(x=>x.payout > 0).reduce((max, team) => {
        return Math.max(max, (team.payout / team.buyCost));
      }, -Infinity);
      
      this.TopShitGame = this.allgames.find(x=>x.payout/x.buyCost == this.maxX);
    },()=>{},()=>{this.loadingOver = true;});
  }
  maxX: number;
  maxPayout: number;
  maxKills: number;
  
  constructor(intervalRequest: IntervalRequestService,public gameHolder:GameHolderService) {
    super(intervalRequest);
  }
  
  ngOnInit(): void {
  }
  
}
