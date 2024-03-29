import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgxWheelComponent } from 'ngx-wheel';

@Component({
  selector: 'app-paysafewheel',
  templateUrl: './paysafewheel.component.html',
  styleUrls: ['./paysafewheel.component.scss']
})
export class PaysafewheelComponent implements OnInit {
  @ViewChild(NgxWheelComponent, { static: false }) wheel:NgxWheelComponent;
  password = "";
  castig:any;
  idToLandOn = 0;
  spinDuration=12;  
  spinNo = 0;
  items=[    
    {id:0, text:'50 LEI Shining Crown',fillStyle:'#bc6c25',prize:"50 LEI Shining Crown"},
    {id:1, text:'25 PSF',fillStyle:'#fefae0',prize:25},    
    {id:2, text:'50 PSF',fillStyle:'#ffff3f',prize:50}, 
    {id:3, text:'25 PSF',fillStyle:'#fefae0',prize:25}, 
    {id:4, text:'100 PSF',fillStyle:"purple",prize:100},  
    {id:5, text:'25 PSF',fillStyle:'#fefae0',prize:25}, 
    {id:6, text:'50 LEI Shining Crown',fillStyle:'#bc6c25',prize:"50 LEI Shining Crown"}, 
    {id:7, text:'25 PSF',fillStyle:'#fefae0',prize:25}, 
    {id:8, text:'1 000 COX',fillStyle:'green',prize:"1 000 COX"}, 
    {id:9, text:'25 PSF',fillStyle:'#fefae0',prize:25}, 
    {id:10, text:'50 PSF',fillStyle:'#ffff3f',prize:50}, 
    {id:11, text:'25 PSF',fillStyle:'#fefae0',prize:25}, 
    {id:12, text:'50 LEI Shining Crown',fillStyle:'#bc6c25',prize:"50 LEI Shining Crown"}, 
    {id:13, text:'25 PSF',fillStyle:'#fefae0',prize:25}, 
    {id:14, text:'1 000 COX',fillStyle:'green',prize:"1 000 COX"}, 
    {id:15, text:'25 PSF',fillStyle:'#fefae0',prize:25},
    {id:16, text:'50 PSF',fillStyle:'#ffff3f',prize:50}, 
    {id:17, text:'25 PSF',fillStyle:'#fefae0',prize:25},
  ];
  
  items2=[
    {id:0, text:'Multiplicator x2',fillStyle:'#007fff',prize:2},     
    {id:1,text:'Colect',fillStyle:'Green',prize:1}, 
    {id:2,text:'Pierzi',fillStyle:'red',prize:0},
  ];

  constructor(private activatedRoute: ActivatedRoute) { 
    this.activatedRoute.queryParams.subscribe(params => {
      this.password = params['pass'];     
    });	
  }
  
  ngOnInit(): void {
    this.spinNo = 0;
  }
  
  async ngAfterViewInit()
  {
    if(this.password == "cibilan123")
    {
      await this.spin();      
    }
  }
  
  async spin()
  {       
    this.wheel.randomizer = this.getRandomSignedInt(360 / this.wheel.items.length / 2 - 1);
    this.idToLandOn = this.getRandomInt(this.items.length);
    await new Promise(resolve => setTimeout(resolve, 2000));
    this.wheel.spin();    
  }
  getRandomSignedInt(arg0: number) {
    var sign = -1;
    if(Math.floor(Math.random() * 100) % 2 ===0)
    {
      sign = -1* sign;
    }
    return sign * this.getRandomInt(arg0);
  }
  
  
  async spin2() {
    this.wheel.randomizer = this.getRandomSignedInt(360 / this.items2.length / 2 - 1);
    this.idToLandOn = this.getRandomInt(this.items2.length);
    await new Promise(resolve => setTimeout(resolve, 2000));
    this.wheel.spin(); 
  }
  
  getRandomInt(max:number)
  {
    return Math.floor(Math.random() * max);
  }
  
  async after(){    
    {      
      await new Promise(resolve => setTimeout(resolve, 9000));       
      if(this.spinNo < 1){    
        this.castig = this.wheel.items[this.idToLandOn].prize;
        if(this.castig > 0)
        {
          this.wheel.items = this.items2;
          await new Promise(resolve => setTimeout(resolve, 1200));      
          this.wheel.reset(); 
          await new Promise(resolve => setTimeout(resolve, 1100));
          await this.spin2();        
          this.spinNo++; 
          return;
        }        
      }
      
      if(this.spinNo > 0){
        var prize = this.wheel.items[this.idToLandOn].prize;  
        if(prize == 1)
        {  
          this.castig = "Fecilitari! Ai castigat PSF" + this.castig;   
        }
        if(prize == 0)
        {
          this.castig = "PIERZI!"
          return;
        }
        if(prize == 2)
        {        
          this.castig = prize*this.castig;          
          await new Promise(resolve => setTimeout(resolve, 1000));      
          this.wheel.reset(); 
          await new Promise(resolve => setTimeout(resolve, 1000));
          await this.spin2();
        }      
      }        
    }  
  }
  
  before(){
    
  }
}
