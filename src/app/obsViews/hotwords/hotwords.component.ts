import { Component, OnInit } from '@angular/core';
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

	timer$ = interval(2000);
	constructor(private intervalRequest: IntervalRequestService) {				
		this.serverRequest();		
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
	serverRequest(){
		this.intervalRequest.apiGetRequest(Settings.HotWords).subscribe((data:any) =>{	
			this.hotWords = data;
		})
	}
}
