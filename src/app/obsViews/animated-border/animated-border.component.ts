import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-animated-border',
  templateUrl: './animated-border.component.html',
  styleUrls: ['./animated-border.component.scss']
})
export class AnimatedBorderComponent implements OnInit {
  timer$ = interval(500);  
  loadingOver = false;

  constructor() {
    var timer = this.timer$.subscribe(()=>{
      this.loadingOver = true;
      timer.unsubscribe();
    });
   }

  ngOnInit(): void {
  }

}
