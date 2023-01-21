import { Component, OnInit } from '@angular/core';
import { Settings } from 'src/assets/database/Models/databaseStructure';
import { EditorBase } from 'src/Factory/EditorBase';
import { ThemedComponent } from 'src/Factory/ThemedComponent';
import { GameHolderService } from 'src/services/game-holder.service';
import { IntervalRequestService } from 'src/services/interval-request.service';

@Component({
  selector: 'app-tranzactii',
  templateUrl: './tranzactii.component.html',
  styleUrls: ['./tranzactii.component.scss']
})
export class TranzactiiComponent extends EditorBase implements OnInit {
  Tranzactii:any;
  LiveGame: any;
  search: any;
  constructor(private intervalRequest: IntervalRequestService,private gameHolderService:GameHolderService) { 
    super(gameHolderService);
    intervalRequest.apiGetRequest(Settings.tranzactii).subscribe((data:any) =>{	          
      this.Tranzactii = data;
    });
    this.intervalRequest.apiGetRequest(Settings.LiveGame).subscribe((data:any) =>{	
      this.LiveGame = data;           
    });    
    this.search = this.gameHolderService.search;
  }
  
  UpdateTranzactii()
  {
    this.intervalRequest.apiSetTranzactii(this.Tranzactii).subscribe(data=>{});
  }  
  
  ngOnInit(): void {
  }
  
  UpdateInPlay()
  {
    this.intervalRequest.apiSetInPlayGameByName(this.LiveGame.game.name).subscribe(data=>{},()=>{},()=>{});
  }
  
}
