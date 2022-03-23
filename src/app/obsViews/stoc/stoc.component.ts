import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { Settings } from 'src/assets/database/Models/databaseStructure';
import { IntervalRequestService } from 'src/services/interval-request.service';

@Component({
  selector: 'app-stoc',
  templateUrl: './stoc.component.html',
  styleUrls: ['./stoc.component.scss']
})
export class StocComponent implements OnInit {

  contor:number = 0;
  timer$ = interval(5000);

  constructor(private intervalRequest: IntervalRequestService) {
    this.timer$.subscribe(()=>{			
      this.serverRequest(); 
    });
   }

   serverRequest(){
    this.intervalRequest.apiGetRequest(Settings.StocItem0).subscribe((data:any) =>{	
      this.contor = data;      
    });
  }
  ngOnInit(): void {
  }

}
