import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { reduce } from 'rxjs/operators';
import { Bonus, BonusHunt } from 'src/assets/database/Models/BonusHunt';
import { ThemedComponent } from 'src/Factory/ThemedComponent';
import { IntervalRequestService } from 'src/services/interval-request.service';
import {Settings} from '../../../assets/database/Models/databaseStructure';

@Component({
	selector: 'app-bonus-hunt',
	templateUrl: './bonus-hunt.component.html',
	styleUrls: ['./bonus-hunt.component.scss']
})

export class BonusHuntComponent extends ThemedComponent implements AfterViewInit {	
	@ViewChild('pRef') pRef: ElementRef | undefined;
	public href: string = "";	
	bonusHunt:BonusHunt;
	customHeight = "0px";
	customInt = 100;
	AverageBet: string;
	TotalLoss: string;
	Hunting: boolean;
	AverageMultiToBreakEven: string;
	AverageMulti: string;
	AverageWin: string;
	OpenedBonuses: Bonus[];
	LiveAverageBet: number;
	LiveAverageMultiToBreakEven: string = '0';
	RemainingBonuses: Bonus[];
	TotalPayed: number;
	
	
	BestPayGame: Bonus;	
	ShitPayGame: Bonus;
	
	constructor(intervalRequest: IntervalRequestService, private activatedRoute: ActivatedRoute) {	
		super(intervalRequest);
		var _userName = "";
		this.activatedRoute.queryParams.subscribe(params => {
			const userId = params['username'];
			_userName = userId;
		});	
		this.href = window.location.origin + "/innerbh?username=" +_userName + "&disableNav=true";	
	}
	
	ngAfterViewInit(): void {
		this.serverRequest = ()=> {	
			this.intervalRequest.apiGetRequest(Settings.LiveBonusHunt).subscribe((data:any) =>{	
				this.bonusHunt = data;		
				this.customInt = 50 + 41 * this.bonusHunt.bonuses.length;
				this.customHeight = this.customInt + "px";	
				this.calculateAVG();
			},()=>{},()=>{this.loadingOver = true;});
		}
	}
	
	//when no opened refresh somehow
	//
	calculateAVG()
	{
		if(this.bonusHunt.bonuses.length > 0){
			this.OpenedBonuses = this.bonusHunt?.bonuses?.filter(x=>x.payed > 0);
			this.RemainingBonuses = this.bonusHunt?.bonuses?.filter(x=>x.payed == 0);
			this.TotalPayed = this.bonusHunt?.bonuses.reduce((a,b)=>a+b.payed,0);
			
			
			this.AverageBet = (this.bonusHunt?.bonuses?.filter(x=>x.betSize>0).map(x=>x.betSize).reduce((a,b)=>a+b) /this.bonusHunt?.bonuses?.length).toFixed(2);
			this.AverageMultiToBreakEven = (this.bonusHunt?.huntValue / (Number(this.AverageBet) * this.bonusHunt.bonuses.length)).toFixed(2);
			
			this.Hunting = this.bonusHunt?.isHunting;
			
			if(this.OpenedBonuses.length > 1){
				//shtpay
				this.ShitPayGame = this.OpenedBonuses?.find(x=>x.multiplier == this.OpenedBonuses?.map(x=>(x.multiplier))?.reduce((a,b)=> Math.min(a,b))) ?? new Bonus();
				//bestpay
				this.BestPayGame = this.OpenedBonuses.find(x=>x.multiplier == this.OpenedBonuses.reduce((acc, x) => Math.max(acc, x.multiplier), 0)) ?? new Bonus();
				//AVG MULTI LIVE
				this.LiveAverageBet = (this.RemainingBonuses?.map(x=>x.betSize)?.reduce((a,b)=>a+b,0) / this.RemainingBonuses.length);
				this.LiveAverageMultiToBreakEven = ((this.bonusHunt?.huntValue - this.TotalPayed) / (this.LiveAverageBet * (this.RemainingBonuses.length ?? 0))).toFixed(2);
			}
			else
			{
				this.ShitPayGame = null;
				this.BestPayGame = null;
			}
		}
	}
}
