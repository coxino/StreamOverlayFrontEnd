import { Component, OnInit } from '@angular/core';
import { Bonus, BonusHunt } from 'src/assets/database/Models/BonusHunt';
import { Settings } from 'src/assets/database/Models/databaseStructure';
import { IntervalRequestService } from 'src/services/interval-request.service';

import {Observable, OperatorFunction} from 'rxjs';
import {debounceTime, distinctUntilChanged, map} from 'rxjs/operators';
import { LocalGame } from 'src/models/local-game';


@Component({
  selector: 'app-bonushunt-editor',
  templateUrl: './bonushunt-editor.component.html',
  styleUrls: ['./bonushunt-editor.component.scss']
})

export class BonushuntEditorComponent implements OnInit {  
  public model: any;
  games:LocalGame[] = [];
  maxBet = 100;
  
  toogleScroll()
  {
    this.bonusHunt.isScrolling = ! this.bonusHunt.isScrolling;
    this.SaveBonusHunt();
  }
  search: OperatorFunction<string, readonly string[]> = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      map(term => term.length < 2 ? []
        : this.games.map(x=>x.Name).filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10))
    )
  
  bonusHunt:BonusHunt = new BonusHunt();
  constructor(private intervalRequest: IntervalRequestService) { 
    this.intervalRequest.readLocaFile().subscribe((data:any)=>{
      this.games = data;
    });
    
    this.intervalRequest.apiGetRequest(Settings.LiveBonusHunt).subscribe((data:any) =>{	
			this.bonusHunt = data;
		});
  }

  
  private themeWrapper:any = document.querySelector('html');
  ngOnInit(): void {
    this.themeWrapper.style.setProperty('--overflow',     "visible");
  }

  toogleIsHunting()
  {
    this.bonusHunt.isHunting = ! this.bonusHunt.isHunting;
    this.SaveBonusHunt();
  }

  newBonusHunt()
  {

  }

  delete(gameName:number)
  {    
    this.intervalRequest.apiDeleteBonus(gameName.toString()).subscribe(data=>{},()=>{},()=>{location.reload()}); 
  }

  payChanged(bonus:Bonus)
  {
    var bm = bonus.payed / bonus.betSize;
    if(bm != NaN)
    return bm;
    else
    return 0;
  }

  incrementBonus()
  {
    this.bonusHunt.bonuses.push(new Bonus());
    //this.SaveBonusHunt();
    //scrollTo(0,document.body.scrollHeight);
  }

  BetFromBH()
  {   
    this.intervalRequest.apiStartBettingFromBonusHunt(this.maxBet).subscribe((data)=>{
       
    });     
  }
  

  SaveBonusHunt()
  {
    this.intervalRequest.apiUpdateBonusHunt(this.bonusHunt).subscribe(data=>{});
  }

}

