import { Component, OnInit } from '@angular/core';
import { Observable, OperatorFunction } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';
import { Settings } from 'src/assets/database/Models/databaseStructure';
import { Meci } from 'src/assets/database/Models/Meci';
import { TournamentModel } from 'src/assets/database/Models/Tournament';
import { LocalGame } from 'src/models/local-game';
import { IntervalRequestService } from 'src/services/interval-request.service';

@Component({
  selector: 'app-tournament',
  templateUrl: './tournament.component.html',
  styleUrls: ['./tournament.component.scss']
})

export class TournamentComponent implements OnInit {
  id = 0;
  fights = 3;
  buyValue = 80;
  games:LocalGame[] = [];
  currentFight:Meci;
  maxBet = 100;
  createnew = true;
  
  search: OperatorFunction<string, readonly string[]> = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      map(term => term.length < 2 ? []
        : this.games.map(x=>x.Name).filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10))
    )
  

  tournament:TournamentModel;
  constructor(private intervalRequest: IntervalRequestService) {
    this.LoadCurrentTournamentBraket();
    this.LoadCurrentFight();
    this.intervalRequest.readLocaFile().subscribe((data:any)=>{
      this.games = data;
    });
  }
  LoadCurrentTournamentBraket() {
    this.intervalRequest.apiGetRequest(Settings.BonusBuyTournament).subscribe((data:any) =>{	
			this.tournament = data;      
      console.log(this.tournament);      
		});
  }
  
  private themeWrapper:any = document.querySelector('html');
  ngOnInit(): void {
    this.themeWrapper.style.setProperty('--overflow',     "visible");
  }
  saveTournament()
  {
    this.intervalRequest.apiUpdateTournament(this.tournament).subscribe((data)=>{
      this.LoadCurrentTournamentBraket();  
      this.LoadCurrentFight();       
    });     
  }

  CreateBetting()
  {
    this.intervalRequest.apiStartBettingFromTournament(this.maxBet).subscribe((data)=>{
       
    });     
  }

  CreateTournament()
  {
     this.intervalRequest.apiCreateTournament(this.fights,this.buyValue).subscribe((data)=>{
        this.LoadCurrentTournamentBraket();        
      this.fights = data.fights;
      this.buyValue = data.buyValue;

      alert("Bonus fight has been created now complete names! and hit enter")
     });
  }

  CloseFight()
  {
    this.intervalRequest.apiCloseCurrentFight().subscribe((data)=>{
      this.LoadCurrentFight();
    });
  }

  saveCurrentFight() {    
    this.intervalRequest.apiSaveCurrentFight(this.currentFight).subscribe((data)=>{});
  }

  newTournament()
  {
    this.createnew = !this.createnew;
  }
  LoadCurrentFight() {
    this.intervalRequest.apiGetRequest(Settings.BonusBuyTournamentLiveFight).subscribe((data:any) =>{	
      this.currentFight = data;
      console.log(this.tournament);      
    });
  }
}


