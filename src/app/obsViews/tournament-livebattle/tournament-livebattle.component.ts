import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { Settings } from 'src/assets/database/Models/databaseStructure';
import { SiteSettings } from 'src/assets/SiteSettings';
import { IntervalRequestService } from 'src/services/interval-request.service';

@Component({
  selector: 'app-tournament-livebattle',
  templateUrl: './tournament-livebattle.component.html',
  styleUrls: ['./tournament-livebattle.component.scss']
})
export class TournamentLivebattleComponent implements OnInit {
  fightDetails: any;
  loadingOver = false;
  timer$ = interval(99000);
  IsAnimatedBorder = false;
  currencyCode = SiteSettings.currency;
  
  constructor(private intervalRequest: IntervalRequestService) {
    this.intervalRequest.apiGetRequest(Settings.BonusBuyTournamentLiveFight).subscribe((data:any) =>{         
      this.fightDetails = data;
      if(this.loadingOver == false)
      this.loadingOver = true;
      var themeWrapper = document.querySelector('html');  
      themeWrapper.style.setProperty('--repeatAmount',this.fightDetails.team1.payout.length);
    }); 
    this.timer$.subscribe(()=>{
      this.intervalRequest.apiGetRequest(Settings.BonusBuyTournamentLiveFight).subscribe((data:any) =>{         
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
  
}
