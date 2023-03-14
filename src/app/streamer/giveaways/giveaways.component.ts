import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { interval, Subject } from 'rxjs';
import { StreamerPageBase } from 'src/Factory/StreamerPageBase';
import { StreamerpagerequestsService } from 'src/services/streamerpagerequests.service';
import { UserdataService } from '../userdata.service';

@Component({
  selector: 'app-giveaways',
  templateUrl: './giveaways.component.html',
  styleUrls: ['./giveaways.component.scss']
})
export class GiveawaysComponent extends StreamerPageBase implements OnInit {
  GiveawaysObserver = new Subject<Array<any>>();
  GivewayItems: any = [];
  timer$ = interval(1000);
  
  constructor(requestService:StreamerpagerequestsService,
    routeService:ActivatedRoute,
    toastrService:ToastrService,
    userdataService:UserdataService) {
      super(requestService,routeService,toastrService,userdataService);   
      this.requestService.requestGiveaways(this.userdataService.ViewerLoginProfile.LocalUserToken, this.userdataService.StreamerProfilePage.streamerID).subscribe((xdata:any)=>{
        this.GiveawaysObserver.next(xdata);  
        
      });
    }
    
    ngOnInit(): void {
      this.GiveawaysObserver.subscribe(data=>{
        this.GivewayItems = data;
        
        this.timer$.subscribe(()=>{
          this.GivewayItems.forEach((element:any) => {       
            element.time = this.getCountDown(element.givewayModel.endTime);  
            element.hasRefreshed = !this.isActive(element.givewayModel.endTime);
            
          }); 
        });        
      });
    }
    
    buyTiket(gid:any)
    {
      this.requestService.buyTicket(gid, this.userdataService.ViewerLoginProfile.LocalUserToken, this.userdataService.StreamerProfilePage.streamerID).subscribe((xdata:any)=>{         
        this.requestService.requestGiveaways(this.userdataService.ViewerLoginProfile.LocalUserToken, this.userdataService.StreamerProfilePage.streamerID).subscribe((xdata2:any)=>{
          this.GiveawaysObserver.next(xdata2);  
          this.userdataService.GetUserCoins(()=>{
            this.toastrService.success(xdata.msg);
          });
        });
      },err=>{
        this.toastrService.error(err.error.msg);
      });
    }
    
    getCountDown(ends:any)
    {    
      var dif = (new Date(ends).valueOf() + 1500 - Date.now().valueOf()) / 1000;
      if(dif > 0){
        var ss = Math.floor(dif % 60).toString().padStart(2,"0");
        var ms = Math.floor(dif/60 % 60).toString().padStart(2,"0");
        var hs = Math.floor(dif/3600 % 24).toString().padStart(2,"0");
        var ds = Math.floor(dif/86400).toString().padStart(2,"0");   
        if(Number(ds) > 0){
          return "Ending in " + ds + "d " + hs + "h " + ms + "m " + ss + "s";
        }
        return "Ending in " + hs + "h " + ms + "m " + ss + "s";
      }
      else{           
        return "Over!";
      }
    }
    
    isActive(ends:any)
    { 
      var dif = (new Date(ends).valueOf() + 1500 - Date.now().valueOf()) / 1000;
      return dif > 0;
    }
  }
  