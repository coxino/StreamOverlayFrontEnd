import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgxWheelComponent } from 'ngx-wheel';
import { IntervalRequestService } from 'src/services/interval-request.service';

@Component({
  selector: 'app-spinningwheel',
  templateUrl: './spinningwheel.component.html',
  styleUrls: ['./spinningwheel.component.scss']
})
export class SpinningwheelComponent implements OnInit {
  @ViewChild(NgxWheelComponent, { static: false }) wheel:NgxWheelComponent;
  password = "";
  idToLandOn = 0;
  spinDuration=12;
  items=[
    {id:0, text:'5 COX',fillStyle:'#9d9d9d',prize:5},
    {id:1, text:'10 COX',fillStyle:'#ffffff',prize:20},
    {id:2, text:'15 COX',fillStyle:'#1eff00',prize:15},
    {id:3, text:'20 COX',fillStyle:'#0070dd',prize:20},
    {id:4, text:'30 COX',fillStyle:'#a335ee',prize:30},
    {id:5, text:'40 COX',fillStyle:'#ff8000',prize:40},
    {id:6, text:'50 COX',fillStyle:'#e6cc80',prize:50},    
    {id:7, text:'PaySafe Wheel',fillStyle:'#00ccff',prize:0},
    {id:8, text:'5 COX',fillStyle:'#9d9d9d',prize:5},
    {id:9, text:'10 COX',fillStyle:'#ffffff',prize:20},
    {id:10, text:'15 COX',fillStyle:'#1eff00',prize:15},
    {id:11, text:'20 COX',fillStyle:'#0070dd',prize:20},
    {id:12, text:'30 COX',fillStyle:'#a335ee',prize:30},
    {id:13, text:'40 COX',fillStyle:'#ff8000',prize:40},
    {id:14, text:'50 COX',fillStyle:'#e6cc80',prize:50},    
    {id:15, text:'PaySafe Wheel',fillStyle:'#00ccff',prize:0},
  ];
  constructor(private intervalRequest: IntervalRequestService,private activatedRoute: ActivatedRoute) { 
    this.activatedRoute.queryParams.subscribe(params => {
      this.password = params['pass'];     
    });	
  }
  
  ngOnInit(): void {
  }
  
  ngAfterViewInit()
  {
    if(this.password == "cibilan123")
    {
      this.spin();
    }
  }
  
  async spin()
  {
    var rn = this.getRandomInt(this.wheel.items.length);
    this.idToLandOn = Math.floor(rn);
    
    console.log(this.items[this.idToLandOn].text);
    
    this.wheel.randomizer = this.getRandomSignedInt(360 / this.wheel.items.length / 2 - 1);
    await new Promise(resolve => setTimeout(resolve, 0));
    this.wheel.spin();  
    
    if(this.items[this.idToLandOn].prize > 0){
      this.intervalRequest.apiAddPointsAll(this.items[this.idToLandOn].prize,"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VybmFtZSI6ImNveGlubyAgICAiLCJQYXNzd29yZCI6ImNvc21pbjEyMzQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIiwibmJmIjoxNjQ3NTE5ODM2LCJleHAiOjE2NDgxMjQ2MzYsImlhdCI6MTY0NzUxOTgzNiwiaXNzIjoiaHR0cDovL215c2l0ZS5jb20iLCJhdWQiOiJodHRwOi8vbXlhdWRpZW5jZS5jb20ifQ.OmAgTLLc5nXalfC7A2NkWw5cv8HawW60zhpfXOu7VQE").subscribe((data)=>
      {      
        this.message = data.status;
        console.log(this.message);
        
      })
    }
  }

  message = "";
  
  getRandomSignedInt(arg0: number) {
    var sign = -1;
    if(Math.floor(Math.random() * 100) % 2 ===0)
    {
      sign = -1* sign;
    }
    return sign * this.getRandomInt(arg0);
  }
  getRandomInt(max:number)
  {
    return Math.floor(Math.random() * max);
  }
  
  after(){
  }
  
  before(){
    
  }
  
}
