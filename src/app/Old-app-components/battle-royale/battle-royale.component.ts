import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { Settings } from 'src/assets/database/Models/databaseStructure';
import { LocalGame } from 'src/models/local-game';
import { IntervalRequestService } from 'src/services/interval-request.service';

@Component({
  selector: 'app-battle-royale',
  templateUrl: './battle-royale.component.html',
  styleUrls: ['./battle-royale.component.scss']
})
export class BattleRoyaleComponent implements OnInit {
  
  timer$ = interval(1000);
  timer2$ = interval(500);
  
  player:any = {playerName:"Starting Soon", game:{name:"Starting Soon", image:"https://mir-s3-cdn-cf.behance.net/projects/404/22da0a97251699.5fd6e18722c8a.jpg"},isCurrent:true ,hide:false};
  hasToChange: boolean;
  
  constructor(private intervalRequest: IntervalRequestService) { 
    console.log(JSON.stringify(this.player));
    
    
    this.timer$.subscribe(()=>{
      intervalRequest.apiGetRequest(Settings.LiveGame).subscribe((data:any)=>{        
        
        if(this.hasToChange == true){            
          this.hasToChange = false;
          if(data.playerName == "" || data.playerName == null || data.playerName == "undefined")
          {
            this.player.playerName = data.inHuntNumber;
          }
          else
          {
            this.player.playerName = data.playerName;
          }
          this.player.game = data.game;
          this.player.isCurrent = true;
          this.player.hide = false;
        }
        
        if( this.player.game.name != data.game.name)
          {
            console.log("Changing");
            
            this.player.isCurrent = false;
            
            var nx = this.timer2$.subscribe(()=>{     
              this.player.hide = true;
              
              this.hasToChange = true;
              nx.unsubscribe();
            });
            return;
          }
          
          
        });
        
        
        
        
      });
      
      
    }
    
    ngOnInit(): void {
    }
    
  }
  