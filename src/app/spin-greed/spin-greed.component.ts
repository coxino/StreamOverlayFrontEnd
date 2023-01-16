import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-spin-greed',
  templateUrl: './spin-greed.component.html',
  styleUrls: ['./spin-greed.component.scss']
})
export class SpinGreedComponent implements OnInit {
  
  @ViewChild('wheel') widgetsContent: ElementRef | undefined;
  
  items:any[] = [
    {id:0,text:'25', image:"/assets/img/LESSGOLD.png"},
    {id:1,text:'50', image:"/assets/img/GOLD.png"},
    {id:2,text:'100', image:"/assets/img/pot_blue.png"},
    {id:2,text:'150', image:"/assets/img/MOREGOLD.png"},
    {id:2,text:'200', image:"/assets/img/pot_green.png"},
    {id:2,text:'250', image:"/assets/img/pot_orange.png"},
    {id:2,text:'UPGRADE', image:"https://static-live.hacksawgaming.com/1102/1.25.0/gameinfoassets/rocket2.png"},
  ];
  
  genItems:any[] = [    
    {id:0,text:'25', image:"/assets/img/LESSGOLD.png"},
    {id:1,text:'50', image:"/assets/img/GOLD.png"},
    {id:2,text:'100', image:"/assets/img/pot_blue.png"},
    {id:2,text:'150', image:"/assets/img/MOREGOLD.png"},
    {id:2,text:'UPGRADE', image:"https://static-live.hacksawgaming.com/1102/1.25.0/gameinfoassets/rocket2.png"},
    {id:2,text:'200', image:"/assets/img/pot_green.png"},
    {id:2,text:'250', image:"/assets/img/pot_orange.png"},
  ];
  constructor() { 
    for (let i = 0; i < 99; i++) {
      this.genItems.push(this.items[this.getRandomInt(this.items.length)]);
    }
  }
  
  getRandomInt(max:number) {
    return Math.floor(Math.random() * max);
  }
  
  ngOnInit(): void {  
    
  }
}
