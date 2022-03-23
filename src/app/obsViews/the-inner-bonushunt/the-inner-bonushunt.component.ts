import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { interval } from 'rxjs';
import { Settings } from 'src/assets/database/Models/databaseStructure';
import { IntervalRequestService } from 'src/services/interval-request.service';

@Component({
  selector: 'app-the-inner-bonushunt',
  templateUrl: './the-inner-bonushunt.component.html',
  styleUrls: ['./the-inner-bonushunt.component.scss']
})
export class TheInnerBonushuntComponent implements OnInit {
  private themeWrapper:any = document.querySelector('html');
  
  bonusList: any[] = [];
  bonusHunt: any;
  timer$ = interval(2000);
  isScrolling = true;
  
  sliceFrom = 0;
  sliceCount = 7;
  
  sliceIndex = 0;
  loadingOver = false;
  
  serverRequest(){    
    this.intervalRequest.apiGetRequest(Settings.LiveBonusHunt).subscribe((data:any) =>{	 
      
      this.bonusHunt = data;				
      this.bonusList = this.bonusHunt.bonuses;
      this.sliceIndex = this.bonusHunt.sliceIndex;
      this.isScrolling = this.bonusList.length > 7 && data.isScrolling;

      this.themeWrapper.style.setProperty('--animation-timer', (1.5*this.bonusList.length)+"s");        

      var isFound = false;
      var cnt = -1;
      this.bonusList.forEach(element => {
        if(isFound == false)
        cnt ++;
        if(element.isCurrent)
        {
          isFound = true;
        }
      });
      
      this.sliceIndex = cnt;

      if(this.bonusList.length < 7 || this.isScrolling == true)
      {
        this.sliceIndex =0;
        this.sliceFrom = 0;
        this.sliceCount = this.bonusList.length;
        return;
      }
      else
      {
        if(this.sliceCount < 7)
        {
          this.sliceCount = 7;
        }
      }
      
      if(this.isScrolling == false)
      {
        if(this.sliceIndex < 3)
        {
          this.sliceIndex = 3
        }
        
        if(this.sliceIndex + 4 > this.bonusList.length)
        {
          this.sliceFrom = this.bonusList.length - this.sliceCount;
        }
        
        else
        {
          this.sliceFrom = this.sliceIndex - 3;
        }
      }    
    });
  }
  
  constructor(private intervalRequest: IntervalRequestService, private activatedRoute: ActivatedRoute) {    
    this.serverRequest();		
    this.timer$.subscribe(()=>{			
      this.serverRequest(); 
      if(this.loadingOver == false)
      {
        this.loadingOver = true;
      }   
    }); 
    
  }
  
  ngOnInit(): void {
    
  }  
}
