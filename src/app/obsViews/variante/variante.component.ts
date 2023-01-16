import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { Settings } from 'src/assets/database/Models/databaseStructure';
import { IntervalRequestService } from 'src/services/interval-request.service';

@Component({
  selector: 'app-variante',
  templateUrl: './variante.component.html',
  styleUrls: ['./variante.component.scss']
})
export class VarianteComponent implements OnInit {
  loadingOver = false;
  IsAnimatedBorder = false;  
  timer$ = interval(100);
  hotWords:any[] = [];
  variantA= 0;
  variantB = 0;
  variantC = 0;
  variantD= 0;
  
  constructor(private intervalRequest: IntervalRequestService) {
    
    //this.loadingOver = true;
    console.log("Loading");
    this.timer$.subscribe(()=>{		
      this.serverRequest(); 
    }); 
    this.intervalRequest.apiGetRequest(Settings.CustomTheme).subscribe((data:any) =>{	
      this.IsAnimatedBorder = data.Options.animatedBorder;        
      this.loadingOver = true;        
    });
    
  }
  
  serverRequest(){
    
    this.intervalRequest.apiGetRequest(Settings.HotWords).subscribe((data:any) =>{	
      this.hotWords = data;
      
      var tot = 4;
      var a = 1;
      var b =1;
      var c =1;
      var d =1;
      
      if(data){-
        this.hotWords.forEach(element => {
          if(element.word == 'a' || element.word == 'A')
          {
            a = element.degree;
          }
          if(element.word == 'b' || element.word == 'B')
          {
            b = element.degree;
          }
          if(element.word == 'c' || element.word == 'C')
          {
            c = element.degree;
          }
          if(element.word == 'd' || element.word == 'D')
          {
            d = element.degree;
          }
        });
      }
      tot = a+b+c+d;
      this.variantA = a / tot * 100;
      this.variantB = b / tot * 100;
      this.variantC = c / tot * 100;
      this.variantD = d / tot * 100;
    })
  }
  
  ResetHotWords(){    
    this.intervalRequest.apiReSetHotWords().subscribe(data=>{		
      
    });
  }
  
  
  
  ngOnInit(): void {
  }
  
}
