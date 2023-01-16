import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { interval } from 'rxjs';
import { Settings } from 'src/assets/database/Models/databaseStructure';
import { IntervalRequestService } from 'src/services/interval-request.service';

@Component({
  selector: 'app-vote-need-greed',
  templateUrl: './vote-need-greed.component.html',
  styleUrls: ['./vote-need-greed.component.scss']
})
export class VoteNeedGreedComponent implements OnInit {
  
	loadingOver = false;
  hotWords:any[] = [];
  timer$ = interval(100);
  IsAnimatedBorder = false;

  need = 1;
  greed = 1;

  
  public get ng() : number {
    return 100 - this.percent;
  }
  
  
  public get percent() : number {
    return this.need / (this.need+this.greed) * 100;
  }
  
  
  constructor(private intervalRequest: IntervalRequestService) { 
      this.ResetHotWords();
      this.timer$.subscribe(()=>{		
				this.serverRequest(); 
			}); 
      this.intervalRequest.apiGetRequest(Settings.CustomTheme).subscribe((data:any) =>{	
				this.IsAnimatedBorder = data.Options.animatedBorder;    
			});
    }

    serverRequest(){
			this.intervalRequest.apiGetRequest(Settings.HotWords).subscribe((data:any) =>{	
				this.hotWords = data;
        this.hotWords.forEach(element => {
          if(element.word == 'adun')
          {
          this.need = element.degree;
        }
        else if(element.word == 'risc')
        {
          this.greed = element.degree;
        }
        });
			})
		}

    ResetHotWords(){
      this.intervalRequest.apiReSetHotWords().subscribe(data=>{			
        if(data == true)
        this.loadingOver = true;
      });
    }
    
    ngOnInit(): void {
    }
    
  }
  