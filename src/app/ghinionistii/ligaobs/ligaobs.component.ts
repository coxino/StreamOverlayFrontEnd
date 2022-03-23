import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { interval } from 'rxjs';
import { Settings } from 'src/assets/database/Models/databaseStructure';
import { LigaUser } from 'src/assets/database/Models/LigaUser';
import { SiteSettings } from 'src/assets/SiteSettings';
import { IntervalRequestService } from 'src/services/interval-request.service';

@Component({
  selector: 'app-ligaobs',
  templateUrl: './ligaobs.component.html',
  styleUrls: ['./ligaobs.component.scss']
})
export class LigaobsComponent implements OnInit {

  @ViewChild('pRef') pRef: ElementRef | undefined;
	public href: string = "";	
	bonusHunt:LigaUser[] = [];
	bestScore:number = 0;
	currencyCode = SiteSettings.currency;
	timer$ = interval(1200);
	
	customHeight = "0px";
	customInt = 100;
	constructor(private intervalRequest: IntervalRequestService, private activatedRoute: ActivatedRoute) {	
		var _userName = "";
		this.activatedRoute.queryParams.subscribe(params => {
			const userId = params['username'];
			_userName = userId;
		});	
		this.href = window.location.origin + "/ligaspecialelorinner?username=" +_userName + "&disableNav=true";
		this.serverRequest();		
		this.timer$.subscribe(()=>{			
			this.serverRequest(); 
		});   
	}
	
	serverRequest(){
		this.intervalRequest.apiGetRequest(Settings.LigaSpecialelor).subscribe((data:any) =>{	
			this.bonusHunt = data.users;							
			
			this.customInt = 50 + 28 * this.bonusHunt.length;
			this.customHeight = this.customInt + "px";
		})
	}
	
	ngOnInit(): void {
	}

}
