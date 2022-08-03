import { Component, OnInit } from '@angular/core';
import { Settings } from 'src/assets/database/Models/databaseStructure';
import { BettingModel } from 'src/models/betting-model';
import { IntervalRequestService } from 'src/services/interval-request.service';

@Component({
  selector: 'app-betting-edit',
  templateUrl: './betting-edit.component.html',
  styleUrls: ['./betting-edit.component.scss']
})
export class BettingEditComponent implements OnInit { 
  beturi: BettingModel;

  constructor(private intervalRequest: IntervalRequestService) {
    this.intervalRequest.apiGetRequest(Settings.LiveBetting).subscribe((data:any) =>{	 
      this.beturi = data;     
    });
  }

  ngOnInit(): void {
  }

  delete(i:number)
  {
   this.beturi.options[i].isVisible = false;
   this.intervalRequest.updateBetting(this.beturi).subscribe((data)=>{
       
  });  
  }

  SaveBetting()
  {
    this.intervalRequest.updateBetting(this.beturi).subscribe((data)=>{
       
    });  
  }

}
