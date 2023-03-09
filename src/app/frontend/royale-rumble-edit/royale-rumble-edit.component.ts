import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Settings } from 'src/assets/database/Models/databaseStructure';
import { RumbleMeci, RumbleTeam, SlotsRumbleModel } from 'src/assets/database/Models/SlotsRumbleModel';
import { EditorBase } from 'src/Factory/EditorBase';
import { GameHolderService } from 'src/services/game-holder.service';
import { IntervalRequestService } from 'src/services/interval-request.service';

@Component({
  selector: 'app-royale-rumble-edit',
  templateUrl: './royale-rumble-edit.component.html',
  styleUrls: ['./royale-rumble-edit.component.scss']
})
export class RoyaleRumbleEditComponent extends EditorBase implements OnInit { 
  slotsRumble: SlotsRumbleModel = new SlotsRumbleModel();

  constructor(intervalRequest: IntervalRequestService,toastr: ToastrService,gameHolder:GameHolderService) {
    super(gameHolder,intervalRequest,toastr);
    this.intervalRequest.apiGetRequest(Settings.SlotsRumble).subscribe((data:any) =>{	 
      this.slotsRumble = data as SlotsRumbleModel;       
    });
  }

  StartSlotsRumble(){
    this.intervalRequest.apiRumbleUpdate(this.slotsRumble).subscribe(data=>{
      if(data === true)
      {
        this.toastr.success("Rumble updated");
      }
  });
  }

  // payout(teamPay:RumbleTeam,event:any)
  // {
  //   console.log(teamPay.GameName);
  //   teamPay.Payout.push(Number(event.target.value));
  //   console.log(JSON.stringify(this.slotsRumble));
    
  // }

  AddNewGame(event:any){

    var i = this.slotsRumble.gameHistory.length - 1;

    if(this.slotsRumble.gameHistory[i].team1.payout <=0 && this.slotsRumble.gameHistory[i].team1.payout <=0)
    {
      this.toastr.error("Make sure you complete the payouts");
      return;
    }

    if((this.slotsRumble.gameHistory[i].team1.payout / this.slotsRumble.gameHistory[i].team1.buyCost) < (this.slotsRumble.gameHistory[i].team2.payout / this.slotsRumble.gameHistory[i].team2.buyCost))
    {
      var q = new RumbleMeci();
      q.team1 =  JSON.parse(JSON.stringify(this.slotsRumble.gameHistory[i].team2)); 
      q.team1.payout = 0;

      q.team2.gameName = "Game";
      q.team2.numeJucator = "Player";
      q.team2.buyCost = this.slotsRumble.gameHistory[i].team2.buyCost;
      q.team2.payout = 0;

      this.slotsRumble.gameHistory.push(q);
    }
    else
    {
      var q = new RumbleMeci();
      q.team1 = JSON.parse(JSON.stringify(this.slotsRumble.gameHistory[i].team1));       
      q.team1.payout = 0;

      q.team2.gameName = "Game";
      q.team2.numeJucator = "Player";
      q.team2.buyCost = this.slotsRumble.gameHistory[i].team2.buyCost;
      q.team2.payout = 0;
      this.slotsRumble.gameHistory.push(q);
    }    
  }

  ArchiveAndStartNewOne(){
    let isExecuted = confirm("Are you sure to execute this action?");
    if(!isExecuted)
    {
      return;
    }
    this.intervalRequest.apiRumbleArchiveAndStartNewOne().subscribe(data=>{
        if(data === true)
        {
          alert("New Rumble Started!");
          this.intervalRequest.apiGetRequest(Settings.SlotsRumble).subscribe((data:any) =>{	 
            this.slotsRumble = data as SlotsRumbleModel;       
          });
        }
    });
  }

  ngOnInit(): void {
  }

}
