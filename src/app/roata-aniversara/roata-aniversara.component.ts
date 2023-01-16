import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgxWheelComponent } from 'ngx-wheel';
import { IntervalRequestService } from 'src/services/interval-request.service';

@Component({
  selector: 'app-roata-aniversara',
  templateUrl: './roata-aniversara.component.html',
  styleUrls: ['./roata-aniversara.component.scss']
})
export class RoataAniversaraComponent implements OnInit {
  @ViewChild(NgxWheelComponent, { static: false }) wheel:NgxWheelComponent;
  password = "";
  idToLandOn = 0;
  spinDuration=12;
  items=[
    {id:0, text:'BIG BAMBOO(60) FULL GMB',fillStyle:'green',prize:25},
    {id:1, text:'BIG BASS SPLASH(40)',fillStyle:'blue',prize:25},    
    {id:2, text:'50 ROTIRI 1 LEU LA ORICE JOC',fillStyle:'DARKGRAY',prize:25},    
    {id:6, text:'50 RON RULAJ X1!',fillStyle:'RED',prize:25},
    {id:3, text:'RISE OF GIZA(34)',fillStyle:'white',prize:25},
    {id:4, text:'BIG BAMBOO(60) FULL GMB',fillStyle:'green',prize:25}, 
    {id:5, text:'SPECIALA(<100) HOTWORDS!',fillStyle:'DARKGRAY',prize:25},
    {id:7, text:'100 RON RULAJ X1!',fillStyle:'DARKRED',prize:25},
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
      this.intervalRequest.apiAddPointsAll(this.items[this.idToLandOn].prize,"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VybmFtZSI6ImNveGlubyAgICAiLCJQYXNzd29yZCI6IlczeU12SHlUNzQ1YVpuYUMiLCJVc2VySWQiOiI3OTYzZmYwOC04OGU2LTRjZTUtOGI0Zi1mN2MwYmNiOWU3ODMiLCJuYmYiOjE2NTk0NzQyNzUsImV4cCI6MTY2MDA3OTA3NSwiaWF0IjoxNjU5NDc0Mjc1LCJpc3MiOiJodHRwOi8vbXlzaXRlLmNvbSIsImF1ZCI6Imh0dHA6Ly9teWF1ZGllbmNlLmNvbSJ9.DejS2cDdqQnnjTCD0DnJiqssaYd3VhqfHntGtpYDtpk").subscribe(async (data)=>
      {      
        await new Promise(resolve => setTimeout(resolve, 10000));
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
