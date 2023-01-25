import { Component, Injector, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { interval } from 'rxjs';
import { ItemType } from 'src/assets/database/Enums/ItemType';
import { Settings } from 'src/assets/database/Models/databaseStructure';
import { ShopItem } from 'src/assets/database/Models/ShopItem';
import { SiteSettings } from 'src/assets/SiteSettings';
import { StreamerPageBase } from 'src/Factory/StreamerPageBase';
import { StreamerpagerequestsService } from 'src/services/streamerpagerequests.service';
import { UserdataService } from '../userdata.service';

@Component({
  selector: 'app-shop-page',
  templateUrl: './shop-page.component.html',
  styleUrls: ['./shop-page.component.scss']
})
export class ShopPageComponent extends StreamerPageBase implements OnInit {
  
  timer$ = interval(1000);
  
  public ShopItems:ShopItem[] = [];
  curencyCode = this.userdataService.StreamerCoinsName;
  constructor(requestService:StreamerpagerequestsService,
    routeService:ActivatedRoute,
    toastrService:ToastrService,
    userdataService:UserdataService) {
      super(requestService,routeService,toastrService,userdataService);
      
      this.ShopItems.push(new ShopItem());
      this.requestService.apiGetShopRequest(userdataService.ViewerLoginProfile.StreamerID,userdataService.ViewerLoginProfile.LocalUserToken).subscribe((data:any)=>{
        this.ShopItems = data;
        var cds = this.ShopItems.filter(x=>x.cooldownValue > 0);
        cds.forEach(element => {element.cooldownValue = element.cooldownValue * 60});
        this.timer$.subscribe((x)=>{   
          cds = this.ShopItems.filter(x=>x.cooldownValue > 0);     
          cds.forEach(element => {            
            element.cooldownValue --;
            var seconds = element.cooldownValue;                     
            var hours = Math.floor(seconds / 3600);
            var minutes = Math.floor(seconds / 60 - hours * 60);  
            var _seconds = Math.floor(seconds % 3600 % 60);
            element.optionalData = `${hours < 10 ? '0' : ''}${hours}:${minutes < 10 ? '0' : ''}${minutes.toFixed(0)}:${_seconds < 10 ? '0' : ''}${_seconds.toFixed(0)}`; 
          });
        });
      });
    }
    
    
    
    buyItem(item:ShopItem)
    {
      this.requestService.apiBuyShopItem(item.itemID,this.userdataService.ViewerLoginProfile.StreamerID,this.userdataService.ViewerLoginProfile.LocalUserToken).subscribe((data:any)=>{
        if(data.status == true)
        {
          item.cooldownValue = item.cooldown * 60;
          item.stoc -=1;
          this.toastrService.success(data.reason,'You bought : ' + item.nume);
        }
        else
        {
          this.toastrService.error('Failed to buy : ' + item.nume, data.reason);
        }
      },()=>{},()=>{});
    }
    
    ngOnInit(): void {
    }
    
  }
  