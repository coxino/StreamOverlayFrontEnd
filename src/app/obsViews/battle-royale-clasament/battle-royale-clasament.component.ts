import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { IntervalRequestService } from 'src/services/interval-request.service';

@Component({
  selector: 'app-battle-royale-clasament',
  templateUrl: './battle-royale-clasament.component.html',
  styleUrls: ['./battle-royale-clasament.component.scss']
})
export class BattleRoyaleClasamentComponent implements OnInit {
  allGames:any[] = [];
  playAble:any[] = [];

  timer$ = interval(2000);
  
  constructor(private intervalRequest: IntervalRequestService) {
    this.timer$.subscribe(()=>{			
      this.serverRequest();      
    });
  }

  serverRequest(){    
    this.intervalRequest.GetAllGames().subscribe((data:any)=>{
      this.allGames = data.allgames;
      this.playAble = [];
      this.allGames.forEach(element => {
        if(element.calificat === true)
        {
          this.playAble.push(element);          
        }
        this.playAble.sort((n1:any,n2:any)=>{
          if(n1.payOut / n1.bet > n2.payOut / n2.bet)
          return -1;
          if(n1.payOut / n1.bet < n2.payOut / n2.bet)
          return 1;

          return 0;
        })
      });
    });
  }

  ngOnInit(): void {
  }

}
