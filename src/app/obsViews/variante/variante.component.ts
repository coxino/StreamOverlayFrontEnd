import { Component, OnInit } from '@angular/core';
import { Settings } from 'src/assets/database/Models/databaseStructure';
import { ThemedComponent } from 'src/Factory/ThemedComponent';
import { IntervalRequestService } from 'src/services/interval-request.service';

@Component({
  selector: 'app-variante',
  templateUrl: './variante.component.html',
  styleUrls: ['./variante.component.scss']
})
export class VarianteComponent extends ThemedComponent implements OnInit {
  hotWords:any[] = [];
  variantA= 0;
  variantB = 0;
  variantC = 0;
  variantD= 0;
  
  constructor(intervalRequest: IntervalRequestService) {    
    super(intervalRequest);  
    this.themeWrapper.style.setProperty('--fit-content' ,'fit-content');    
  }
  
  serverRequest = () =>{
    this.intervalRequest.apiGetRequest(Settings.HotWords).subscribe((data:any) =>{	
      this.hotWords = data;
      
      var tot = 0;
      var a = 8;
      var b =1;
      var c =1;
      var d =1;
      
      if(data){
       a = this.hotWords.filter(x=>x?.word?.toLowerCase() == 'a').length ?? 0;
       b = this.hotWords.filter(x=>x?.word?.toLowerCase() == 'b').length ?? 0;
       c = this.hotWords.filter(x=>x?.word?.toLowerCase() == 'c').length ?? 0;
       d = this.hotWords.filter(x=>x?.word?.toLowerCase() == 'd').length ?? 0;
      }

      tot = a+b+c+d;
      this.variantA = a / tot * 100;
      this.variantB = b / tot * 100;
      this.variantC = c / tot * 100;
      this.variantD = d / tot * 100;
    })
  }
  
  ResetHotWords(){    
    this.intervalRequest.apiReSetHotWords().subscribe(data=>{	});
  }

  ngOnInit(): void {
  }
  
}
