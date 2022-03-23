import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { IntervalRequestService } from 'src/services/interval-request.service';

@Component({
  selector: 'app-testbets',
  templateUrl: './testbets.component.html',
  styleUrls: ['./testbets.component.scss']
})
export class TestbetsComponent implements OnInit {
  user:string = "";
  bet:number = 100;
  option:string = "a";
  timer$ = interval(3500);
  
  constructor(private intervalRequest: IntervalRequestService) { }
  betAsUser()
  {
    this.intervalRequest.apiBetAsUser(this.bet + "",this.option,this.user).subscribe((data:any) =>{				    
      console.log(JSON.stringify(data));      
    });
  }
  
  setWinner()
  {
    this.intervalRequest.apiSetWinners(this.option).subscribe((data:any) =>{				    
      console.log(JSON.stringify(data));      
    });
  }
  
  cnt = 0;

  apiUpdateTESTOption()
  {
    // this.intervalRequest.apiUpdateTESTOption().subscribe((data:any) =>{				    
    //   console.log(JSON.stringify(data));      
    // });
    
    this.timer$.subscribe(()=>{
      
      var strs = ["a", "b", "c", "d", "e", "f", "g", "h"];
      
      //for (let i = 0; i < 2500; i++) {
        console.log("attept" + this.cnt + "");
        
        var bettingOption = strs[this.getRandomInt(9)];
        var user = "user" + this.cnt;
        var amount = this.getRandomInt(101);        
        this.intervalRequest.apiBetAsUser(amount + "",bettingOption + "",user).subscribe((data:any) =>{				    
          console.log(JSON.stringify(data));      
        });

        this.cnt++;
      //}
    });
  }
  
  getRandomInt(max:number) {
    return Math.floor(Math.random() * max);
  }


  ngOnInit(): void {
  }
  
}
