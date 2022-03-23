import { Component, OnInit } from '@angular/core';
import { Settings } from 'src/assets/database/Models/databaseStructure';
import { IntervalRequestService } from 'src/services/interval-request.service';

@Component({
  selector: 'app-tranzactii',
  templateUrl: './tranzactii.component.html',
  styleUrls: ['./tranzactii.component.scss']
})
export class TranzactiiComponent implements OnInit {
  Tranzactii:any;

  constructor(private intervalRequest: IntervalRequestService) { 
    this.intervalRequest.apiGetRequest(Settings.tranzactii).subscribe((data:any) =>{	
      console.log(data);
      
    this.Tranzactii = data;
  });}

  Update()
  {
    this.intervalRequest.apiSetTranzactii(this.Tranzactii).subscribe(data=>{});
  }

  ResetHotWords(){
    this.intervalRequest.apiReSetHotWords().subscribe(data=>{});
  }
  private themeWrapper:any = document.querySelector('html');
  ngOnInit(): void {
    this.themeWrapper.style.setProperty('--overflow',     "visible");
  }

}
