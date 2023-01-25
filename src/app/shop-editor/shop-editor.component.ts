import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GoogleLoginProvider, SocialAuthService } from 'angularx-social-login';
import { CookieService } from 'ngx-cookie';
import { ToastrService } from 'ngx-toastr';
import { DropType, ItemType } from 'src/assets/database/Enums/ItemType';
import { DropItem, ShopItem } from 'src/assets/database/Models/ShopItem';
import { EditorBase } from 'src/Factory/EditorBase';
import { GameHolderService } from 'src/services/game-holder.service';
import { IntervalRequestService } from 'src/services/interval-request.service';

@Component({
  selector: 'app-shop-editor',
  templateUrl: './shop-editor.component.html',
  styleUrls: ['./shop-editor.component.scss']
})

export class ShopEditorComponent extends EditorBase implements OnInit {
  public Number = Number;
  ItemTypeEnum = ItemType;
  ItemTypes = Object.keys(ItemType).filter(f => !isNaN(Number(f))).map(function(item) {return parseInt(item, 10);});
  DropTypeEnum = DropType;
  DropTypes = Object.keys(DropType).filter(f => !isNaN(Number(f))).map(function(item) {return parseInt(item, 10);})
  public ShopItems:ShopItem[] = []; 
  
  setYoutoubeToken(){
    this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID,{scope:'https://www.googleapis.com/auth/youtube.channel-memberships.creator'});
  }
  
  constructor(intervalRequest: IntervalRequestService,
    gameHolder:GameHolderService,
    toastr:ToastrService,
    private router: Router,
    private cookieService: CookieService,
    private socialAuthService: SocialAuthService) {
      super(gameHolder,intervalRequest,toastr);
      
      this.socialAuthService.authState.subscribe((_user) => {       
        intervalRequest.apiLogUserIn(_user.authToken).subscribe((data:any)=>{
          if(data == true)
          {
            toastr.success("Token Saved!");
          }
          else
          {
            toastr.error("Error Saving Token");
          }
        })
      });

      intervalRequest.apiGetShopRequest().subscribe((data:any)=>{
        this.ShopItems = data;
      });    
      
      this.ShopItems.push(new ShopItem());
    }
    ngOnInit(): void {
      
    }
    
    SaveShop(){
      this.intervalRequest.saveShopItems(this.ShopItems).subscribe((data:any)=>{
        this.toastr.success(data);
      });    
    }
    
    DeleteShop(itemID:string){ 
      var index = this.ShopItems.map((x:any) => {
        return x.itemID;
      }).indexOf(itemID);
      
      this.ShopItems.splice(index, 1);
      this.SaveShop();
    }
    
    toogle(i:number, option:string)
    {
      switch(option){
        case 'om':
        this.ShopItems[i].onlyMembers = !this.ShopItems[i].onlyMembers;
        break;
        
        case 'ra':
        this.ShopItems[i].requireAditional = !this.ShopItems[i].requireAditional;
        break;
        
        case 'iv':
        this.ShopItems[i].isVisible = !this.ShopItems[i].isVisible;
        break;
        
        default:
        this.toastr.warning("Items does not exist!")
      }    
    }
    removeDrop(i:number, j:number)
    {
      this.toastr.warning('Removing' + j)
      this.ShopItems[i].drops.splice(j,1);
    }
    addDrop(i:number)
    {
      this.ShopItems[i].drops.push(new DropItem());
    }
    
    addNewShopItem(){
      this.ShopItems.push(new ShopItem())
    }
    
    viewMyPage(){
      var username = this.cookieService.get('username');
      this.router.navigate(['/streamer/' +username+ ''], { queryParams: { } });
    }
  }
  