import { Component, OnInit } from '@angular/core';
import { Bonus, BonusHunt } from 'src/assets/database/Models/BonusHunt';
import { Settings } from 'src/assets/database/Models/databaseStructure';
import { IntervalRequestService } from 'src/services/interval-request.service';


import { ToastrService } from 'ngx-toastr';
import { EditorBase } from 'src/Factory/EditorBase';
import { GameHolderService } from 'src/services/game-holder.service';

@Component({
  selector: 'app-bonushunt-editor',
  templateUrl: './bonushunt-editor.component.html',
  styleUrls: ['./bonushunt-editor.component.scss']
})

export class BonushuntEditorComponent extends EditorBase implements OnInit {  
  public model: any;
  maxBet = 100;
  
  toogleScroll()
  {
    this.bonusHunt.isScrolling = !this.bonusHunt.isScrolling;
    this.SaveBonusHunt();
  }

    bonusHunt:BonusHunt = new BonusHunt();
    constructor(intervalRequest: IntervalRequestService,toastr: ToastrService,gameHolder:GameHolderService) { 
      super(gameHolder, intervalRequest,toastr);     
      
      this.intervalRequest.apiGetRequest(Settings.LiveBonusHunt).subscribe((data:any) =>{	
        this.bonusHunt = data;
      });
    }
    
    
    ngOnInit(): void {
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
  
  