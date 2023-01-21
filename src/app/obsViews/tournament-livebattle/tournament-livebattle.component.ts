import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { Settings } from 'src/assets/database/Models/databaseStructure';
import { SiteSettings } from 'src/assets/SiteSettings';
import { ThemedComponent } from 'src/Factory/ThemedComponent';
import { LocalGame } from 'src/models/local-game';
import { GameHolderService } from 'src/services/game-holder.service';
import { IntervalRequestService } from 'src/services/interval-request.service';

@Component({
  selector: 'app-tournament-livebattle',
  templateUrl: './tournament-livebattle.component.html',
  styleUrls: ['./tournament-livebattle.component.scss']
})

export class TournamentLivebattleComponent extends ThemedComponent implements OnInit {
  fightDetails: any;
  currencyCode = SiteSettings.currency;
  
  serverRequest = () => {
    this.intervalRequest.apiGetRequest(Settings.BonusBuyTournamentLiveFight).subscribe((data:any) =>{
      if(this.fightDetails?.team1?.payout?.length ?? 0 != data.team1.payout.length)
      {
        this.themeWrapper.style.setProperty('--repeatAmount',data.team1.payout.length);
      }
      this.fightDetails = data;
    });  
  }
  
  constructor(intervalRequest: IntervalRequestService,public gameHolder:GameHolderService) {
    super(intervalRequest);    
    this.themeWrapper.style.setProperty('--fit-content' ,'fit-content');
  }
  
  ngOnInit(): void { 
    
  }  
}
