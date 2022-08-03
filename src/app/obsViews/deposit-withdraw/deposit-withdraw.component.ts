import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { Settings } from 'src/assets/database/Models/databaseStructure';
import { SiteSettings } from 'src/assets/SiteSettings';
import { IntervalRequestService } from 'src/services/interval-request.service';

@Component({
  selector: 'app-deposit-withdraw',
  templateUrl: './deposit-withdraw.component.html',
  styleUrls: ['./deposit-withdraw.component.scss']
})
export class DepositWithdrawComponent implements OnInit {
  currencyCode = SiteSettings.currency;
  
  timer$ = interval(5000);
  tranzactii: any;
  constructor(private intervalRequest: IntervalRequestService) {
    this.timer$.subscribe(()=>{			
      this.serverRequest(); 
    });
  }
  IsAnimatedBorder = false;
  serverRequest(){
    this.intervalRequest.apiGetRequest(Settings.tranzactii).subscribe((data:any) =>{	
      this.tranzactii = data;							
    });
    this.intervalRequest.apiGetRequest(Settings.CustomTheme).subscribe((data:any) =>{	
			this.IsAnimatedBorder = data.Options.animatedBorder;    
		  });
  }
  
  ngOnInit(): void {
  }
  
}
