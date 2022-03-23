import { Component, OnInit } from '@angular/core';
import { Settings } from 'src/assets/database/Models/databaseStructure';
import { IntervalRequestService } from 'src/services/interval-request.service';

@Component({
  selector: 'app-loiality',
  templateUrl: './loiality.component.html',
  styleUrls: ['./loiality.component.scss']
})
export class LoialityComponent implements OnInit {
  timer$: any;

  constructor(private intervalRequest: IntervalRequestService) {
    this.timer$.subscribe(()=>{
        this.intervalRequest.apiGetRequest(Settings.LoyalityGetRanks).subscribe((data:any) =>{         
                    
        });  
      });  
   }

  ngOnInit(): void {
  }

}
