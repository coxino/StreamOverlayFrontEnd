import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Observable, OperatorFunction } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';
import { Settings } from 'src/assets/database/Models/databaseStructure';
import { Meci } from 'src/assets/database/Models/Meci';
import { TournamentModel } from 'src/assets/database/Models/Tournament';
import { EditorBase } from 'src/Factory/EditorBase';
import { LocalGame } from 'src/models/local-game';
import { GameHolderService } from 'src/services/game-holder.service';
import { IntervalRequestService } from 'src/services/interval-request.service';

@Component({
  selector: 'app-tournament',
  templateUrl: './tournament.component.html',
  styleUrls: ['./tournament.component.scss']
})

export class TournamentComponent extends EditorBase implements OnInit, AfterViewInit {
  id = 0;
  fights = 3;
  buyValue = 80;
  currentFight:Meci;
  maxBet = 100;
  createnew = true;
  hasPlayers = false;
  tournament:TournamentModel = new TournamentModel();
  
  constructor(intervalRequest: IntervalRequestService,gameHolder:GameHolderService, toastr:ToastrService) {
    super(gameHolder,intervalRequest,toastr);
    this.LoadCurrentTournamentBraket();
    this.LoadCurrentFight();
  }
  ngAfterViewInit(): void {
    this.themeWrapper.style.setProperty('--fit-content' ,'100%');  
  }
  LoadCurrentTournamentBraket() {
    this.intervalRequest.apiGetRequest(Settings.BonusBuyTournament).subscribe((data:any) =>{	
			this.tournament = data;      
      console.log(this.tournament);      
		});
  }
  
  ngOnInit(): void {
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
     this.intervalRequest.apiCreateTournament(this.fights,this.buyValue,this.tournament).subscribe((data)=>{
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


