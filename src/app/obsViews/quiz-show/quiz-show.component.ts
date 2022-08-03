import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { Settings } from 'src/assets/database/Models/databaseStructure';
import { IntervalRequestService } from 'src/services/interval-request.service';

@Component({
  selector: 'app-quiz-show',
  templateUrl: './quiz-show.component.html',
  styleUrls: ['./quiz-show.component.scss']
})
export class QuizShowComponent implements OnInit {
  hotWords:any[] = [];

  votesA = 0;
  votesB = 0;
  votesC = 0;
  votesD = 0;

  timer$ = interval(2000);
  constructor(private intervalRequest: IntervalRequestService) {
    this.timer$.subscribe(()=>{			
    this.serverRequest(); 
  }); 
}

  ngOnInit(): void {
  }

  serverRequest(){
		this.intervalRequest.apiGetRequest(Settings.HotWords).subscribe((data:any) =>{	
      this.hotWords = data;
      this.votesA = this.hotWords?.filter(x=>x.word == "a")[0]?.degree ?? 0;
      this.votesB = this.hotWords?.filter(x=>x.word == "b")[0]?.degree ?? 0;
      this.votesC = this.hotWords?.filter(x=>x.word == "c")[0]?.degree ?? 0;
      this.votesD = this.hotWords?.filter(x=>x.word == "d")[0]?.degree ?? 0;
		});
	}
}
