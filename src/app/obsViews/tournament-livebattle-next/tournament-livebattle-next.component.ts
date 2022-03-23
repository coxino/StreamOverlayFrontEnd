  import { Component, OnInit } from '@angular/core';
  import { interval } from 'rxjs';
  import { Settings } from 'src/assets/database/Models/databaseStructure';
  import { LocalGame } from 'src/models/local-game';
  import { IntervalRequestService } from 'src/services/interval-request.service';

  @Component({
    selector: 'app-tournament-livebattle-next',
    templateUrl: './tournament-livebattle-next.component.html',
    styleUrls: ['./tournament-livebattle-next.component.scss']
  })
  export class TournamentLivebattleNextComponent implements OnInit {
    bracket: any;
    MeciFinal:any;
    MeciuriSferturi:any[] = [];
    MeciuriSemiFinale:any[] = [];
    semiFinalists:any[] = [];
    
    loadingOver = false;
    
    _isQuarterVisible = false;
    _isSemisVisible = false;
    
    timer$ = interval(3000);
    games:LocalGame[] = [];
    
    serverRequest(){
      this.intervalRequest.apiGetRequest(Settings.BonusBuyTournament).subscribe((data:any) =>{ 
        this.isServerOn = true;
        if(data != null || data != undefined)
        {        
          this.bracket = data;                       
                    this.MeciuriSferturi = this.bracket.meciuriSferturi;
          this.MeciuriSemiFinale = this.bracket.meciuriSemiFinale;
          this.isQuarterVisible = data.isQuarter;  
          this.MeciFinal = data.meciFinal;
          this.isSemisVisible = data.isSemis;
          this.isFinal = data.isFinal;
        }
        else{
          this.isServerOn = false;
          this.isQuarterVisible = false;
          this.isSemisVisible = false;
          this.isFinal = false;
        }
      },()=>{
        this.isServerOn = false;
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
    
    constructor(private intervalRequest: IntervalRequestService) {
      this.intervalRequest.readLocaFile().subscribe((data:any)=>{
        this.games = data;
      });
      this.serverRequest();		
      this.timer$.subscribe(()=>{			
        this.serverRequest(); 
        if(this.loadingOver == false)
          {
            this.loadingOver = true;
          }
      });   
    }

    hasPlayedarr:boolean[] = new Array();
    hasPlayed(no:number)
    {
      var toreturn = this.hasPlayedarr[no];
      this.hasPlayedarr[no] = true;
      return toreturn;
    }

    scorTotal()
    {
      var toReturn = 0;
      this.MeciuriSferturi.forEach(element => {      
            toReturn += element.team1.scor;      
          toReturn += element.team2.scor;      
      });

      this.MeciuriSemiFinale.forEach(element => {      
            toReturn += element.team1.scor;      
          toReturn += element.team2.scor;      
      });      
            toReturn += this.MeciFinal.team1.scor;      
          toReturn += this.MeciFinal.team2.scor;
      
      return (toReturn ?? 0).toFixed(2);
    }

    scorTotalMeci(name:string)
    {
      var toReturn = 0;
      this.MeciuriSferturi.forEach(element => {
        if(element.team1.nume == name)
        {
            toReturn += element.team1.scor;
        }
        if(element.team2.nume == name)
        {
          toReturn += element.team2.scor;
        }
      });

      this.MeciuriSemiFinale.forEach(element => {
        if(element.team1.nume == name)
        {
            toReturn += element.team1.scor;
        }
        if(element.team2.nume == name)
        {
          toReturn += element.team2.scor;
        }
      });


      if(this.MeciFinal.team1.nume == name)
        {
            toReturn += this.MeciFinal.team1.scor;
        }
        if(this.MeciFinal.team2.nume == name)
        {
          toReturn += this.MeciFinal.team2.scor;
        }
      return (toReturn ?? 0).toFixed(2);
    }

    getImage(name:string)
    {
      var toReturn = this.games.filter(v => v.Name.toLowerCase() === name.toLowerCase())[0]?.Image ?? "";
      if(toReturn == "")
      {
        toReturn = "/assets/img/image-not-found.jpg";
      }
      return  toReturn;
    }
    
    ngOnInit(): void {
      
    }
    
    isQuarter = false;
    isSemis = false;
    isFinal = false;
    isServerOn = false;
    
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

