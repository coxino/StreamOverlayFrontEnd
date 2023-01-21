import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BonusHunt } from 'src/assets/database/Models/BonusHunt';
import { ThemedComponent } from 'src/Factory/ThemedComponent';
import { IntervalRequestService } from 'src/services/interval-request.service';
import {Settings} from '../../../assets/database/Models/databaseStructure';

@Component({
	selector: 'app-bonus-hunt',
	templateUrl: './bonus-hunt.component.html',
	styleUrls: ['./bonus-hunt.component.scss']
})

export class BonusHuntComponent extends ThemedComponent implements OnInit {	
	@ViewChild('pRef') pRef: ElementRef | undefined;
	public href: string = "";	
	bonusHunt:BonusHunt;
	customHeight = "0px";
	customInt = 100;
	AverageBet: string;
	TotalLoss: string;
	BestPayValue: string;
	Hunting: boolean;
	AverageMultiToBreakEven: string;
	AverageMulti: string;
	AverageWin: string;
	BestPayGame: any;
	ShitPay: string;
	Opened: number;
	ShitPayGame: string;
	LiveAverageBet: number;
	LiveAverageMultiToBreakEven: string;
	
	constructor(intervalRequest: IntervalRequestService, private activatedRoute: ActivatedRoute) {	
		super(intervalRequest);
		var _userName = "";
		this.activatedRoute.queryParams.subscribe(params => {
			const userId = params['username'];
			_userName = userId;
		});	
		this.href = window.location.origin + "/innerbh?username=" +_userName + "&disableNav=true";			 
	}
	
	serverRequest = ()=> {	
		this.intervalRequest.apiGetRequest(Settings.LiveBonusHunt).subscribe((data:any) =>{	
			this.bonusHunt = data;		
			this.customInt = 68 + 41 * this.bonusHunt.bonuses.length;
			this.customHeight = this.customInt + "px";	
			this.calculateAVG();
		});
	}
	
	calculateAVG()
	{
		this.Opened = this.bonusHunt?.bonuses?.filter(x=>x.payed > 0).length;
		this.AverageBet = (this.bonusHunt?.bonuses?.filter(x=>x.betSize>0).map(x=>x.betSize).reduce((a,b)=>a+b) /this.bonusHunt?.bonuses?.length).toFixed(2);
		this.LiveAverageBet = (this.bonusHunt?.bonuses?.filter(x=>x.payed == 0)?.map(x=>x.betSize).reduce((a,b)=>a+b) / this.bonusHunt?.bonuses?.filter(x=>x.payed == 0).length);
		this.Hunting = this.bonusHunt?.isHunting ?? false;
		this.AverageMultiToBreakEven = (this.bonusHunt?.huntValue / (Number(this.AverageBet) * this.bonusHunt?.bonuses.length)).toFixed(2);
		this.LiveAverageMultiToBreakEven = ((this.bonusHunt?.huntValue - this.bonusHunt?.bonuses.reduce((a,b)=>a+b.payed,0)) / (this.LiveAverageBet * this.bonusHunt?.bonuses.filter(x=>x.payed == 0).length)).toFixed(2);
		this.AverageMulti = (this.bonusHunt?.bonuses?.filter(x => x.payed > 0)?.map(x => x.multiplier).reduce((acc, x) => acc + x, 0) / this.bonusHunt?.bonuses?.filter(x => x.payed > 0)?.length ?? 0).toFixed(2) ?? "0";
		this.AverageWin = (this.bonusHunt?.bonuses?.filter(x => x.payed > 0)?.map(x => x.payed).reduce((acc, x) => acc + x, 0) / this.bonusHunt?.bonuses?.filter(x => x.payed > 0)?.length ?? 0).toFixed(2);
		//shtpay
		this.ShitPay = this.bonusHunt?.bonuses?.filter(x=>x.payed > 1).map(x=>(x.payed / x.betSize)).reduce((a,b)=> Math.min(a,b)).toFixed(2);
		this.ShitPayGame = this.bonusHunt?.bonuses?.find(x=>x.payed / x.betSize == Number(this.ShitPay))?.gameName ?? "WAITING";
		//bestpay
		this.BestPayValue = (this.bonusHunt?.bonuses?.reduce((acc, x) => Math.max(acc, x.payed), 0) ?? 0).toFixed(0);
		this.BestPayGame = this.bonusHunt?.bonuses?.find(x=>x.payed == Number(this.BestPayValue)) ?? "WAITING";
	}
	
	ngOnInit(): void {
	}
}
