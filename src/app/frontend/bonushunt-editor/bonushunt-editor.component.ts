import { Component, OnInit } from '@angular/core';
import { Bonus, BonusHunt } from 'src/assets/database/Models/BonusHunt';
import { Settings } from 'src/assets/database/Models/databaseStructure';
import { IntervalRequestService } from 'src/services/interval-request.service';

import {Observable, OperatorFunction} from 'rxjs';
import {debounceTime, distinctUntilChanged, map} from 'rxjs/operators';
import { LocalGame } from 'src/models/local-game';

import { ToastrService } from 'ngx-toastr';

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
    map(term => term.length < 2 ? [] : this.games.map(x=>x.Name).filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10))
    )
    bonusHunt:BonusHunt = new BonusHunt();
    constructor(private intervalRequest: IntervalRequestService,private toastr: ToastrService) { 
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
    
    delete(gameName:number)
    {    
      this.bonusHunt.bonuses.splice(gameName,1);
      this.intervalRequest.apiDeleteBonus(gameName.toString()).subscribe(data=>{
        
      }); 
    }
    
    incrementBonus()
    {
      this.bonusHunt.bonuses.push(new Bonus());   
    }
    
    BetFromBH()
    {   
      this.intervalRequest.apiStartBettingFromBonusHunt(this.maxBet).subscribe((data)=>{
        
      });     
    }
    
    
    SaveBonusHunt()
    {
      this.intervalRequest.apiUpdateBonusHunt(this.bonusHunt).subscribe(data=>{
        //this.toastr.success('Bonus hunt updated!');
      },err=>{
        this.toastr.error('Error updating bonushunt!');
      },()=>{
        this.toastr.success('Bonus hunt updated!');
      });
      
    }
    
  }
  
  