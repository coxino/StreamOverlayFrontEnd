import { Component, OnInit } from '@angular/core';
import { Settings } from 'src/assets/database/Models/databaseStructure';
import { IntervalRequestService } from 'src/services/interval-request.service';

@Component({
  selector: 'app-edit-wallet',
  templateUrl: './edit-wallet.component.html',
  styleUrls: ['./edit-wallet.component.scss']
})
export class EditWalletComponent {
  Tranzactii:any;

  constructor(private intervalRequest: IntervalRequestService) { 
    this.intervalRequest.apiGetRequest(Settings.tranzactii).subscribe((data:any) =>{
    this.Tranzactii = data;
  });
}

  Update()
  {
    this.intervalRequest.apiSetTranzactii(this.Tranzactii).subscribe(data=>{});
  }

  ResetHotWords(){
    this.intervalRequest.apiReSetHotWords().subscribe(data=>{});
  }
}
