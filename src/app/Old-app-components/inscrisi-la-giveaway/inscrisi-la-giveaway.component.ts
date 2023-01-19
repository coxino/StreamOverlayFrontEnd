import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { interval } from 'rxjs';
import { Settings } from 'src/assets/database/Models/databaseStructure';
import { IntervalRequestService } from 'src/services/interval-request.service';

@Component({
	selector: 'app-inscrisi-la-giveaway',
	templateUrl: './inscrisi-la-giveaway.component.html',
	styleUrls: ['./inscrisi-la-giveaway.component.scss']
})
export class InscrisiLaGiveawayComponent implements OnInit {
	
	IsAnimatedBorder = false;
	balantaFinala = 0;
	inscrisiLaGiveaway = 0;
	
	timer$ = interval(2000);
	
	constructor(private intervalRequest: IntervalRequestService) {	
		this.timer$.subscribe(()=>{		
			this.serverRequest(); 
		});   
		this.intervalRequest.apiGetRequest(Settings.CustomTheme).subscribe((data:any) =>{	
			this.IsAnimatedBorder = data.Options.animatedBorder;    
		});
	}
	ngOnInit(): void {		
	}
	
	
	
	serverRequest(){
		this.intervalRequest.apiGetRequest(Settings.GetBalantaFinalaCount).subscribe((data:any) =>{	
			this.balantaFinala = data;
		});
		//   this.intervalRequest.apiGetRequest(Settings.GetGiveawayCount).subscribe((data:any) =>{	
		// 			this.inscrisiLaGiveaway = data;
		// 		});
	}
}