import { Component, OnInit } from '@angular/core';
import { interval, timer } from 'rxjs';
import { IntervalRequestService } from 'src/services/interval-request.service';

@Component({
  selector: 'app-giveaway',
  templateUrl: './giveaway.component.html',
  styleUrls: ['./giveaway.component.scss']
})
export class GiveawayComponent implements OnInit {
  
  timer$ = interval(1000);
  GiveAways: any;
  
  constructor(private intervalRequest: IntervalRequestService) { 
    var coxiUrl = "https://coxino.go.ro:5000/api/giveaway?viewerID=";
    this.getGiveaways();
    this.timer$.subscribe(()=>{
      this.processGiveaways();
    });
    
  }
  getGiveaways() {
    this.intervalRequest.apiGetgiveaways().subscribe((data:any)=>{
      this.GiveAways = data;
    });
  }
  processGiveaways() {   
    this.GiveAways.forEach((element:any) => {
      var endtime = new Date(element.givewayModel.endTime);
      if(endtime.valueOf() - 5000 < (Date.now().valueOf()))
      {
        if(element.winners.length < 1){            
          console.log("There is one");            
          this.intervalRequest.setGiveawayWinner().subscribe((xdata:any)=>{
            {
              this.getGiveaways();
              console.log("Gata si cu giveaway-ul" + xdata.msg);
            }
          })
        }
      }
    });
  
  }
  
  ngOnInit(): void {
  }
  
}
