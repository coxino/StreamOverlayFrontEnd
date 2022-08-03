import { Component, OnInit } from '@angular/core';
import { Settings } from 'src/assets/database/Models/databaseStructure';
import { IntervalRequestService } from 'src/services/interval-request.service';

@Component({
  selector: 'app-shop-editor',
  templateUrl: './shop-editor.component.html',
  styleUrls: ['./shop-editor.component.scss']
})
export class ShopEditorComponent implements OnInit {
  
  public ShopItems:any = [];
  
  constructor(private intervalRequest: IntervalRequestService) {
    intervalRequest.apiGetShopRequest().subscribe((data:any)=>{
      this.ShopItems = data;
    });
    
  }
  private themeWrapper:any = document.querySelector('html');
  ngOnInit(): void {
    this.themeWrapper.style.setProperty('--overflow',     "visible");
  }
  
  SaveShop(){
    this.intervalRequest.saveShopItems(this.ShopItems).subscribe((data:any)=>{
      alert(data);
    });    
  }
  
  DeleteShop(itemID:number){ 
    console.log("DELETING : " + itemID);
    
    var index = this.ShopItems.map((x:any) => {
      return x.itemID;
    }).indexOf(itemID);
    
    this.ShopItems.splice(index, 1);
    
    console.log("Deleted " + index)
  }
  
  
}
