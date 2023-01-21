import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { data } from 'jquery';
import { interval } from 'rxjs';
import { Settings } from 'src/assets/database/Models/databaseStructure';
import { ThemedComponent } from 'src/Factory/ThemedComponent';
import { IntervalRequestService } from 'src/services/interval-request.service';

@Component({
	selector: 'app-hotwords',
	templateUrl: './hotwords.component.html',
	styleUrls: ['./hotwords.component.scss']
})
export class HotwordsComponent extends ThemedComponent implements OnInit {
	hotWords:any[] = [];

	constructor(intervalRequest: IntervalRequestService) {	
		super(intervalRequest);
		this.ResetHotWords();
		this.themeWrapper.style.setProperty('--fit-content' ,'fit-content');    
	}

	serverRequest = ()=>{
		this.intervalRequest.apiGetRequest(Settings.HotWords).subscribe((data:any) =>{	
			this.hotWords = data;		
		})
	}

	ngOnInit(): void {		
	}
	
	ResetHotWords(){
		this.intervalRequest.apiReSetHotWords().subscribe(data=>{});
	}		
}
