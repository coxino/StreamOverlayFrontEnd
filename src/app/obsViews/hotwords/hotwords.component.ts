import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { data } from 'jquery';
import { interval } from 'rxjs';
import { Settings } from 'src/assets/database/Models/databaseStructure';
import { IntervalRequestService } from 'src/services/interval-request.service';

@Component({
	selector: 'app-hotwords',
	templateUrl: './hotwords.component.html',
	styleUrls: ['./hotwords.component.scss']
})
export class HotwordsComponent implements OnInit {
	hotWords:any[] = [];
	loadingOver = false;
	interValue =1500;
	timer$ = interval(this.interValue);
	
	constructor(private intervalRequest: IntervalRequestService,
		private activatedRoute: ActivatedRoute) {	
			this.ResetHotWords();							
			this.activatedRoute.queryParams.subscribe(params => {
				var username = params['username'];
				if(username == "coxino")
				{
					this.interValue = 150;
					this.timer$ = interval(this.interValue);
				}
			});
			
			this.timer$.subscribe(()=>{		
				this.serverRequest(); 
			});   
			this.intervalRequest.apiGetRequest(Settings.CustomTheme).subscribe((data:any) =>{	
				this.IsAnimatedBorder = data.Options.animatedBorder;    
			});
		}
		IsAnimatedBorder = false;
		ngOnInit(): void {		
		}
		
		ResetHotWords(){
			this.intervalRequest.apiReSetHotWords().subscribe(data=>{			
				if(data == true)
				this.loadingOver = true;
			});
		}
		
		serverRequest(){
			this.intervalRequest.apiGetRequest(Settings.HotWords).subscribe((data:any) =>{	
				this.hotWords = data;
			})
		}
	}
	