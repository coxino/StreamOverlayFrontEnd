import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { EditorBase } from 'src/Factory/EditorBase';
import { GameHolderService } from 'src/services/game-holder.service';
import { IntervalRequestService } from 'src/services/interval-request.service';

@Component({
  selector: 'app-redeemspage',
  templateUrl: './redeemspage.component.html',
  styleUrls: ['./redeemspage.component.scss']
})
export class RedeemspageComponent extends EditorBase implements OnInit {

  ViewType = ViewItems;
  ViewTypeMode = ViewItems.Redeems;

  ytmembers:any;
  twitchmembers:any;

  filters:any = [];
  redeems:any;
  constructor(gameholderService:GameHolderService, intervalRequest:IntervalRequestService,toastr:ToastrService) {
    super(gameholderService,intervalRequest,toastr);
    intervalRequest.getAllRedeems().subscribe((data:any)=>{
      this.redeems = data.redeems;
      this.ytmembers = data.ytmembers;
      this.twitchmembers = data.twitchmembers;
      var _f = this.redeems.map((x:any)=>x.shopItem.optionalData);
      _f.forEach((element:any) => {
        if(!this.filters.includes(element))
        {
          this.filters.push(element);
        }
      });
    });
   }

   enableDisable(str:string){
    this.redeems.forEach((element:any) => {
      if(element.shopItem.optionalData == str)
      element.hide = !element.hide;
    });
   }

  ngOnInit(): void {
  }

}


export enum ViewItems{
  Redeems,
  Ytmembers,
  Twitchmembers
}