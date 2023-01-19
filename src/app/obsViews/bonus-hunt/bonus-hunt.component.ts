import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { interval } from 'rxjs';
import { AppComponent } from 'src/app/app.component';
import { BonusHunt } from 'src/assets/database/Models/BonusHunt';
import { IntervalRequestService } from 'src/services/interval-request.service';
import {Settings} from '../../../assets/database/Models/databaseStructure';
import { SiteSettings } from '../../../assets/SiteSettings'


@Component({
	selector: 'app-bonus-hunt',
	templateUrl: './bonus-hunt.component.html',
	styleUrls: ['./bonus-hunt.component.scss']
})

export class BonusHuntComponent implements OnInit {	
	@ViewChild('pRef') pRef: ElementRef | undefined;
	public href: string = "";	
	bonusHunt:BonusHunt;
	bestScore:number = 0;
	currencyCode = SiteSettings.currency;
	timer$ = interval(5000);
	loadingOver = false;
	
	IsAnimatedBorder = false;

	customHeight = "0px";
	customInt = 100;
	AverageBet: string;
	TotalLoss: string;
	BestPayValue: string;
	Hunting: boolean;
	AverageMultiToBreakEven: string;
	AverageMulti: string;
	AverageWin: string;
	BestPayGame: string;
	ShitPay: string;
	Opened: number;
	ShitPayGame: string;
	LiveAverageBet: number;
	LiveAverageMultiToBreakEven: string;
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

		this.intervalRequest.apiGetRequest(Settings.CustomTheme).subscribe((data:any) =>{	
			this.IsAnimatedBorder = data.Options.animatedBorder;    
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
			this.customInt = 68 + 41 * this.bonusHunt.bonuses.length;
			this.customHeight = this.customInt + "px";	
			this.loadingOver = true;	
			this.calculateAVG();	
		});
	}

	calculateAVG()
	{
		this.Opened = this.bonusHunt?.bonuses?.filter(x=>x.payed > 0).length;
		this.AverageBet = (this.bonusHunt?.bonuses?.filter(x=>x.betSize>0).map(x=>x.betSize).reduce((a,b)=>a+b) /this.bonusHunt?.bonuses?.length).toFixed(2);
		this.LiveAverageBet = (this.bonusHunt?.bonuses?.filter(x=>x.payed == 0)?.map(x=>x.betSize).reduce((a,b)=>a+b) / this.bonusHunt?.bonuses?.filter(x=>x.payed == 0).length);
		this.TotalLoss = ((this.bonusHunt?.huntValue - this.bonusHunt?.bonuses?.reduce((acc, x) => acc + x.payed, 0)) ?? 0).toLocaleString();
		this.BestPayValue = (this.bonusHunt?.bonuses?.reduce((acc, x) => Math.max(acc, x.payed), 0) ?? 0).toFixed(0);
		this.BestPayGame = this.bonusHunt?.bonuses?.find(x=>x.payed == Number(this.BestPayValue))?.gameName ?? "WAITING";
		this.Hunting = this.bonusHunt?.isHunting ?? false;
		this.AverageMultiToBreakEven = (this.bonusHunt?.huntValue / (Number(this.AverageBet) * this.bonusHunt?.bonuses.length)).toFixed(2);
		this.LiveAverageMultiToBreakEven = ((this.bonusHunt?.huntValue - this.bonusHunt?.bonuses.reduce((a,b)=>a+b.payed,0)) / (this.LiveAverageBet * this.bonusHunt?.bonuses.filter(x=>x.payed == 0).length)).toFixed(2);
		this.AverageMulti = (this.bonusHunt?.bonuses?.filter(x => x.payed > 0)?.map(x => x.multiplier).reduce((acc, x) => acc + x, 0) / this.bonusHunt?.bonuses?.filter(x => x.payed > 0)?.length ?? 0).toFixed(2) ?? "0";
		this.AverageWin = (this.bonusHunt?.bonuses?.filter(x => x.payed > 0)?.map(x => x.payed).reduce((acc, x) => acc + x, 0) / this.bonusHunt?.bonuses?.filter(x => x.payed > 0)?.length ?? 0).toFixed(2);


		//shtpay
		this.ShitPay = this.bonusHunt?.bonuses?.filter(x=>x.payed > 1).map(x=>(x.payed / x.betSize)).reduce((a,b)=> Math.min(a,b)).toFixed(2);
		this.ShitPayGame = this.bonusHunt?.bonuses?.find(x=>x.payed / x.betSize == Number(this.ShitPay))?.gameName ?? "WAITING";
		
	}
	
	ngOnInit(): void {
	}
}
