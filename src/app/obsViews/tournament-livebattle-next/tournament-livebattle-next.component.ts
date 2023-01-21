  import { Component, OnInit } from '@angular/core';
  import { interval } from 'rxjs';
  import { Settings } from 'src/assets/database/Models/databaseStructure';
  import { ThemedComponent } from 'src/Factory/ThemedComponent';
  import { LocalGame } from 'src/models/local-game';
  import { GameHolderService } from 'src/services/game-holder.service';
  import { IntervalRequestService } from 'src/services/interval-request.service';
  
  @Component({
    selector: 'app-tournament-livebattle-next',
    templateUrl: './tournament-livebattle-next.component.html',
    styleUrls: ['./tournament-livebattle-next.component.scss']
  })
  export class TournamentLivebattleNextComponent extends ThemedComponent implements OnInit {
    bracket: any;
    MeciFinal:any;
    MeciuriOptimi:any[]=[];
    MeciuriSferturi:any[] = [];
    MeciuriSemiFinale:any[] = [];
    semiFinalists:any[] = [];
    
    _isQuarterVisible = false;
    _isSemisVisible = false;
    
    games:LocalGame[] = [];
    isOptimi = false;
    
    serverRequest = () => {
      this.intervalRequest.apiGetRequest(Settings.BonusBuyTournament).subscribe((data:any) =>{ 
        if(data != null || data != undefined)
        {        
          this.bracket = data;                       
          this.MeciuriOptimi = this.bracket.meciuriOptimi;
          this.MeciuriSferturi = this.bracket.meciuriSferturi;
          this.MeciuriSemiFinale = this.bracket.meciuriSemiFinale;
          this.isOptimi = data.isOptimi;
          this.isQuarterVisible = data.isQuarter;  
          this.MeciFinal = data.meciFinal;
          this.isSemisVisible = data.isSemis;
          this.isFinal = data.isFinal;
        }
        else{
          this.isQuarterVisible = false;
          this.isSemisVisible = false;
          this.isFinal = false;
        }
      },()=>{
        this.isQuarterVisible = false;
        this.isSemisVisible = false;
        this.isFinal = false;
      },
      ()=>{
        
      });
    }
    
    get isSemisVisible():boolean{
      return this._isSemisVisible;
    }  
    
    constructor(intervalRequest: IntervalRequestService,public gameHolder:GameHolderService) {
      super(intervalRequest);
      this.themeWrapper.style.setProperty('--fit-content' ,'fit-content');    
    }
    
    //TODO:SCOR GRAPH
    scorTotal()
    {      
      var toReturn = 0;
      toReturn += this.MeciuriOptimi.reduce((a,b)=> a+b.team1.scor + b.team2.scor);
      toReturn += this.MeciuriSferturi.reduce((a,b)=> a+b.team1.scor + b.team2.scor);
      toReturn += this.MeciuriSemiFinale.reduce((a,b)=> a+b.team1.scor + b.team2.scor);
      
      toReturn += this.MeciFinal.team1.scor;      
      toReturn += this.MeciFinal.team2.scor;
      
      return (toReturn ?? 0).toFixed(2);
    }
    
    ngOnInit(): void {
      
    }
    
    isQuarter = false;
    isSemis = false;
    isFinal = false;
    
    set isQuarterVisible(value:boolean){
      if(this.isQuarterVisible != value)
      { 
        this._isQuarterVisible = value;
        //after 900 set semis
        if(this.isQuarter != value)
        {
          var subs = interval(900).subscribe(()=>{        
            this.isQuarter = value;              
            subs.unsubscribe();  
          });
        }
      }
    }
    
    get isQuarterVisible():boolean{
      return this._isQuarterVisible;
    }
    
    set isSemisVisible(value:boolean){  
      if(this.isSemisVisible != value)
      {  
        this._isSemisVisible = value;
        
        //after 900 set semis
        if(this.isSemis !== value)
        {     
          var subs = interval(900).subscribe(()=>{
            this.isSemis = value; 
            subs.unsubscribe();      
          });
        }
      }
    }
  }
  
  