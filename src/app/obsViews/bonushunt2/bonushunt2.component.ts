import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { interval } from 'rxjs';
import { BonusHunt } from 'src/assets/database/Models/BonusHunt';
import { Settings } from 'src/assets/database/Models/databaseStructure';
import { SiteSettings } from 'src/assets/SiteSettings';
import { IntervalRequestService } from 'src/services/interval-request.service';

@Component({
  selector: 'app-bonushunt2',
  templateUrl: './bonushunt2.component.html',
  styleUrls: ['./bonushunt2.component.scss']
})
export class Bonushunt2Component implements OnInit {
  @ViewChild('pRef') pRef: ElementRef | undefined;
	public href: string = "";	
	bonusHunt:BonusHunt;
	bestScore:number = 0;
	currencyCode = SiteSettings.currency;
	timer$ = interval(5000);
	
	customHeight = "0px";
	customInt = 100;
	constructor(private intervalRequest: IntervalRequestService, private activatedRoute: ActivatedRoute) {	
		var _userName = "";
		this.activatedRoute.queryParams.subscribe(params => {
			const userId = params['username'];
			_userName = userId;
		});	
		this.href = window.location.origin + "/innerbh?username=" +_userName + "&disableNav=true";
		this.serverRequest();		
		this.timer$.subscribe(()=>{			
			this.serverRequest(); 
		});   
	}
	
	serverRequest(){
		this.intervalRequest.apiGetRequest(Settings.LiveBonusHunt).subscribe((data:any) =>{	
			this.bonusHunt = data;							
			this.bonusHunt.bonuses.forEach((element) => { 
				if(element.multiplier > this.bestScore) 
				{
					this.bestScore = element.multiplier;
				}   
			});	
			this.customInt = 50 + 21 * this.bonusHunt.bonuses.length;
			this.customHeight = this.customInt + "px";
		})
	}
	
	ngOnInit(): void {
	}
}
