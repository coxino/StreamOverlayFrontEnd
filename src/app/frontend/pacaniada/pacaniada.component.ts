import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Settings } from 'src/assets/database/Models/databaseStructure';
import { ClasamentPacaniada, UserPacaniada } from 'src/assets/database/Models/UserPacaniada';
import { IntervalRequestService } from 'src/services/interval-request.service';

@Component({
	selector: 'app-pacaniada',
	templateUrl: './pacaniada.component.html',
	styleUrls: ['./pacaniada.component.scss']
})
export class PacaniadaComponentE implements OnInit {
	
	clasamentPacaniada:ClasamentPacaniada = new ClasamentPacaniada();
	
	lastBalance = 0;
	
	constructor(private intervalRequest: IntervalRequestService) {     
		this.intervalRequest.apiGetRequest(Settings.Pacaniada).subscribe((data:any) =>{	
			if(data != null)
			this.clasamentPacaniada = data;
			this.clasamentPacaniada.users.sort((x,y)=>
			{
				if(x.end > 1) 
				return 1; 
				else 
				return -1;}
				);
			});
		}
		
		SavePacaniada(bal:number = -1){
			this.intervalRequest.SaveClasament(this.clasamentPacaniada).subscribe((data:any)=>{});
			if(bal > 0)
			{
				this.lastBalance = bal;
			}
		}
		
		AddUerInPacaniada(){      
			var newUser = new UserPacaniada();
			newUser.start = this.lastBalance; 
			this.clasamentPacaniada.users.push(newUser);
			
			this.clasamentPacaniada.users.sort((x,y)=>
			{
				if(x.end > 1) 
				return 1; 
				else 
				return -1;
			});

			this.SavePacaniada();
		}
		
		private themeWrapper:any = document.querySelector('html');
		ngOnInit(): void {
			this.themeWrapper.style.setProperty('--overflow',     "visible");
		}
		
	}
	