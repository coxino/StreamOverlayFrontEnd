import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { ThemedComponent } from 'src/Factory/ThemedComponent';
import { IntervalRequestService } from 'src/services/interval-request.service';

@Component({
  selector: 'app-animated-border',
  templateUrl: './animated-border.component.html',
  styleUrls: ['./animated-border.component.scss']
})
export class AnimatedBorderComponent extends ThemedComponent implements OnInit {
  timer$ = interval(500);  
  loadingOver = false;

  constructor(intervalRequest:IntervalRequestService) {
    super(intervalRequest);
    var timer = this.timer$.subscribe(()=>{
      this.loadingOver = true;
      timer.unsubscribe();
    });
  }

  IsAnimatedBorder = false;
  ngOnInit(): void {
  }

}
