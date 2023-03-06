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

  token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VybmFtZSI6ImNveGlubyAgICAiLCJQYXNzd29yZCI6IlczeU12SHlUNzQ1YVpuYUMiLCJVc2VySWQiOiI3OTYzZmYwOC04OGU2LTRjZTUtOGI0Zi1mN2MwYmNiOWU3ODMiLCJuYmYiOjE2NzUwODI4NjQsImV4cCI6MTY3NTY4NzY2NCwiaWF0IjoxNjc1MDgyODY0LCJpc3MiOiJodHRwOi8vbXlzaXRlLmNvbSIsImF1ZCI6Imh0dHA6Ly9teWF1ZGllbmNlLmNvbSJ9.zO73ElpatI-Vae3K_qFvkkznqyPLkDVL3ZwCkv0rvEs";

  password = "";
  idToLandOn = 0;
  spinDuration=12;
  items=[
    {id:0, text:'5 Monede',fillStyle:'#7DB9B6',prize:5},
    {id:1, text:'10 Monede',fillStyle:'#E96479',prize:10},
    {id:2, text:'5 Monede',fillStyle:'#7DB9B6',prize:5},
    {id:3, text:'10 Monede',fillStyle:'#E96479',prize:10},  
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
      await new Promise(resolve => setTimeout(resolve, 8000));
      this.intervalRequest.apiAddPointsAll(this.items[this.idToLandOn].prize,this.token).subscribe(async (data)=>
      {      
        await new Promise(resolve => setTimeout(resolve, 1000));
        this.message = data.status;        
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
