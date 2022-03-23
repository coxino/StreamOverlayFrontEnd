import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { interval } from 'rxjs';
import { Settings } from 'src/assets/database/Models/databaseStructure';
import { LigaUser } from 'src/assets/database/Models/LigaUser';
import { IntervalRequestService } from 'src/services/interval-request.service';

@Component({
  selector: 'app-ligainner',
  templateUrl: './ligainner.component.html',
  styleUrls: ['./ligainner.component.scss']
})
export class LigainnerComponent implements OnInit {
  bonusHunt:LigaUser[] = [];
  timer$ = interval(1000);
  constructor(private intervalRequest: IntervalRequestService, private activatedRoute: ActivatedRoute) {

    this.timer$.subscribe(()=>{			
			this.serverRequest(); 
		});   
   }

   getmaxmulti(user:LigaUser)
   {
    return Math.max.apply(Math, user.speciale.map(function(o) { return o.payed / o.buyIn; }))
   }

  serverRequest(){
		this.intervalRequest.apiGetRequest(Settings.LigaSpecialelor).subscribe((data:any) =>{	
			this.bonusHunt = data.users;					
		})
  }
  ngOnInit(): void {
  }

}
