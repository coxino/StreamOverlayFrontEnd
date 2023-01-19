import { Component, OnInit } from '@angular/core';
import { IntervalRequestService } from 'src/services/interval-request.service';

@Component({
  selector: 'app-battle-royale-edit',
  templateUrl: './battle-royale-edit.component.html',
  styleUrls: ['./battle-royale-edit.component.scss']
})
export class BattleRoyaleEditComponent implements OnInit {
  private themeWrapper:any = document.querySelector('html');
  allGames:any[] = [];
  playAble:any[] = [];

  constructor(private intervalRequest: IntervalRequestService) {
    this.themeWrapper.style.setProperty('--overflow',     "visible");
    this.intervalRequest.GetAllGames().subscribe((data:any)=>{
      this.allGames = data.allgames;
      this.allGames.forEach(element => {
        if(element.playerName)
        {
          this.playAble.push(element);
          
        }
      });
    });
  }

  SetInPlay(game:any){
    
    this.intervalRequest.apiSetInPlayGame(game,game.bet).subscribe(data=>{},()=>{},()=>{
      //location.reload();
    });
  }

  CalificaJocul(game:any)
  {
    game.calificat = true;
    this.intervalRequest.apiCalificaJocul(game).subscribe(data=>{},()=>{},()=>{
    });
  }
   

  ngOnInit(): void {
  }

}
