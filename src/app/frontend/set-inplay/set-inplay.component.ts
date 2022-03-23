import { Component, OnInit } from '@angular/core';
import { data } from 'jquery';
import { Observable, OperatorFunction } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';
import { Settings } from 'src/assets/database/Models/databaseStructure';
import { LocalGame } from 'src/models/local-game';
import { Round } from 'src/models/round-model';
import { IntervalRequestService } from 'src/services/interval-request.service';

@Component({
  selector: 'app-set-inplay',
  templateUrl: './set-inplay.component.html',
  styleUrls: ['./set-inplay.component.scss']
})
export class SetInplayComponent implements OnInit {
  LiveGame:any;
  games:LocalGame[] = [];
  LiveGameBet=5;
  
  search: OperatorFunction<string, readonly string[]> = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      map(term => term.length < 2 ? []
        : this.games.map(x=>x.Name).filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10))
    )
    
  constructor(private intervalRequest: IntervalRequestService) { 
    this.intervalRequest.apiGetRequest(Settings.LiveGame).subscribe((data:any) =>{	
			this.LiveGame = data;           
		});

    this.intervalRequest.readLocaFile().subscribe((data:any)=>{
      this.games = data;
    });
  }

  Save(){
    this.intervalRequest.apiSetInPlayGame(this.LiveGame).subscribe(data=>{},()=>{},()=>{
      location.reload();
    });
  }

  AddTobonusHunt()
  {
    this.intervalRequest.apiAddToBonusHunt(this.LiveGame,this.LiveGameBet + "").subscribe(data=>{},()=>{},()=>{
      location.reload();
    });
  }

  addNew()
  {        
    this.LiveGame.game.rounds.push(new Round());
  }

  ngOnInit(): void {
  }
}
