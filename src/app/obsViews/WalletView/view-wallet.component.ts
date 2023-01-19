import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { CustomTheme } from 'src/assets/database/Models/CustomTheme';
import { Settings } from 'src/assets/database/Models/databaseStructure';
import { ThemedComponent } from 'src/assets/Factory/ThemedComponent';
import { SiteSettings } from 'src/assets/SiteSettings';
import { IntervalRequestService } from 'src/services/interval-request.service';

@Component({
  selector: 'app-view-wallet',
  templateUrl: './view-wallet.component.html',
  styleUrls: ['./view-wallet.component.scss']
})
export class ViewWalletComponent extends ThemedComponent implements OnInit {
  
  tranzactii: any;
  constructor(intervalRequest: IntervalRequestService) {
    super(intervalRequest);
    
  }
  
  serverRequest = ()=>{
    this.intervalRequest.apiGetRequest(Settings.tranzactii).subscribe((data:any) =>{	
      this.tranzactii = data;							
    });   
  };
  
  ngOnInit(): void {
   
  }  
}
