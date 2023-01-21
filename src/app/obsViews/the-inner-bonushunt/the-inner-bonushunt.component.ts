import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { interval } from 'rxjs';
import { Settings } from 'src/assets/database/Models/databaseStructure';
import { ThemedComponent } from 'src/Factory/ThemedComponent';
import { IntervalRequestService } from 'src/services/interval-request.service';

@Component({
  selector: 'app-the-inner-bonushunt',
  templateUrl: './the-inner-bonushunt.component.html',
  styleUrls: ['./the-inner-bonushunt.component.scss']
})
export class TheInnerBonushuntComponent extends ThemedComponent implements OnInit {
  bonusList: any[] = [];
  bonusHunt: any;
  isScrolling = true;
  sliceFrom = 0;
  sliceCount = 7;
  sliceIndex = 0;
  
  serverRequest = ()=> {
    this.intervalRequest.apiGetRequest(Settings.LiveBonusHunt).subscribe((data:any) =>{	       
      this.bonusHunt = data;				
      this.bonusList = this.bonusHunt.bonuses;
      this.sliceIndex = this.bonusHunt.sliceIndex;
      this.isScrolling = this.bonusList.length > 7 && data.isScrolling;
            
      this.themeWrapper.style.setProperty('--animation-timer', (1.5*this.bonusList.length)+"s");       
    });
  }
  
  constructor(intervalRequest: IntervalRequestService) {    
    super(intervalRequest);
    this.serverRequest();	
  }
  
  ngOnInit(): void {
    
  }  
}
