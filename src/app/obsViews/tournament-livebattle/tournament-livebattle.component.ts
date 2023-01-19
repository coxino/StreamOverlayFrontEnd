import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { Settings } from 'src/assets/database/Models/databaseStructure';
import { SiteSettings } from 'src/assets/SiteSettings';
import { LocalGame } from 'src/models/local-game';
import { IntervalRequestService } from 'src/services/interval-request.service';

@Component({
  selector: 'app-tournament-livebattle',
  templateUrl: './tournament-livebattle.component.html',
  styleUrls: ['./tournament-livebattle.component.scss']
})
export class TournamentLivebattleComponent implements OnInit {
  fightDetails: any;
  loadingOver = false;
  timer$ = interval(1000);
  IsAnimatedBorder = false;
  currencyCode = SiteSettings.currency;
  games:LocalGame[] = [];
  themeWrapper = document.querySelector('html');  

  constructor(private intervalRequest: IntervalRequestService) {
    this.intervalRequest.readLocaFile().subscribe((data:any)=>{
      this.games = data;
    });
    this.intervalRequest.apiGetRequest(Settings.BonusBuyTournamentLiveFight).subscribe((data:any) =>{         
      this.fightDetails = data;
      if(this.loadingOver == false)
      this.loadingOver = true;
      this.themeWrapper.style.setProperty('--repeatAmount',this.fightDetails.team1.payout.length);
    }); 
    this.timer$.subscribe(()=>{
      this.intervalRequest.apiGetRequest(Settings.BonusBuyTournamentLiveFight).subscribe((data:any) =>{         
        if(this.fightDetails.team1.payout.length != data.team1.payout.length)
        {
          window.location.reload();
        }
        this.fightDetails = data;
        if(this.loadingOver == false)
        this.loadingOver = true;
      });  
    });  
    this.intervalRequest.apiGetRequest(Settings.CustomTheme).subscribe((data:any) =>{	
      this.IsAnimatedBorder = data.Options.animatedBorder;    
    });
  }
  
  ngOnInit(): void { 
    
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
  
}
