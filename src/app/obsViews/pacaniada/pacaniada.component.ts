import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { Settings } from 'src/assets/database/Models/databaseStructure';
import { ClasamentPacaniada, UserPacaniada } from 'src/assets/database/Models/UserPacaniada';
import { IntervalRequestService } from 'src/services/interval-request.service';

@Component({
	selector: 'app-pacaniada',
	templateUrl: './pacaniada.component.html',
	styleUrls: ['./pacaniada.component.scss']
})
export class PacaniadaComponent implements OnInit {
	
	olTimer = 630;
	
	olTimerS="";
	pacaniada:ClasamentPacaniada;
	
	currentUser:UserPacaniada;
	timer$ = interval(2000);
	timer2$ = interval(1000);
	IsAnimatedBorder= false;
	constructor(private intervalRequest: IntervalRequestService) {
		this.intervalRequest.apiGetRequest(Settings.CustomTheme).subscribe((data:any) =>{	
			this.IsAnimatedBorder = data.Options.animatedBorder;    
		});
		this.serverRequest();
		this.timer$.subscribe(()=>{			
			this.serverRequest(); 
		}); 
		
		this.timer2$.subscribe(()=>{			
			this.olTimer--; 
			var minutes = Math.floor(this.olTimer / 60);
			var secs = this.olTimer - (minutes * 60);
			this.olTimerS = minutes + ":" + secs.toString();
		});
	}
	
	serverRequest(){
		this.intervalRequest.apiGetRequest(Settings.Pacaniada).subscribe((data:any) =>{	
			if(data?.users?.length > this.pacaniada?.users?.length)
			{
				this.resetTimer();
			}
			this.pacaniada = data;
				this.currentUser = this.pacaniada.users.filter(x=>x.end == 0)[0] ?? new UserPacaniada();
				
				this.pacaniada.users.sort((a,b) =>{
					if((a.start - a.end) > (b.start-b.end))
					return 1;
					if( (b.start-b.end) > (a.start - a.end))
					return -1;
					
					return 0;
				});
		});
	}
	
	resetTimer(){
		this.olTimer = 630;
	}
	
	ngOnInit(): void {
	}
	
}
