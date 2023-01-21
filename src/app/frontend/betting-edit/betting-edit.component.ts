import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Settings } from 'src/assets/database/Models/databaseStructure';
import { EditorBase } from 'src/Factory/EditorBase';
import { BettingModel } from 'src/models/betting-model';
import { GameHolderService } from 'src/services/game-holder.service';
import { IntervalRequestService } from 'src/services/interval-request.service';

@Component({
  selector: 'app-betting-edit',
  templateUrl: './betting-edit.component.html',
  styleUrls: ['./betting-edit.component.scss']
})
export class BettingEditComponent extends EditorBase implements OnInit { 
  beturi: BettingModel;

  constructor(intervalRequest: IntervalRequestService,toastr: ToastrService,gameHolder:GameHolderService) {
    super(gameHolder,intervalRequest,toastr);
    this.intervalRequest.apiGetRequest(Settings.LiveBetting).subscribe((data:any) =>{	 
      this.beturi = data;     
    });
    
  }

  ngOnInit(): void {
  }

  toogle(i:number)
  {
   this.beturi.options[i].isVisible = !this.beturi.options[i].isVisible;
   this.intervalRequest.updateBetting(this.beturi).subscribe((data)=>{
       
  });  
  }

  SaveBetting()
  {
    this.intervalRequest.updateBetting(this.beturi).subscribe((data)=>{
       
    });  
  }

}
