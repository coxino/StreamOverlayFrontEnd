import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Observable, OperatorFunction } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';
import { EditorBase } from 'src/Factory/EditorBase';
import { GameHolderService } from 'src/services/game-holder.service';
import { IntervalRequestService } from 'src/services/interval-request.service';

@Component({
  selector: 'app-redeemspage',
  templateUrl: './redeemspage.component.html',
  styleUrls: ['./redeemspage.component.scss']
})
export class RedeemspageComponent extends EditorBase implements OnInit {
  filterTerm:string = "";
  ViewType = ViewItems;
  ViewTypeMode = ViewItems.Redeems;
  AllViewers:any;
  ytmembers:any;
  twitchmembers:any;
  
  filters:any = [];
  redeems:any;
  constructor(gameholderService:GameHolderService, intervalRequest:IntervalRequestService,toastr:ToastrService) {
    super(gameholderService,intervalRequest,toastr);
    intervalRequest.getAllRedeems().subscribe((data:any)=>{
      this.redeems = data.redeems;
      this.AllViewers = data.allViewers;
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
  
  public nameSearch: OperatorFunction<string, readonly string[]> = (text$: Observable<string>) =>
  text$.pipe(
    debounceTime(200),
    distinctUntilChanged(),
    map(term => term.length < 2 ? []
      : this.AllViewers.map((x: { name: any; })=>x.name).filter((v: string) => v.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10))
      )
    }
    
    
    export enum ViewItems{
      Redeems,
      Ytmembers,
      Twitchmembers,
      AllViewers
    }