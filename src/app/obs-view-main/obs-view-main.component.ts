import { Component, OnInit } from '@angular/core';
import { CustomTheme } from 'src/assets/database/Models/CustomTheme';
import { Settings } from 'src/assets/database/Models/databaseStructure';
import { IntervalRequestService } from 'src/services/interval-request.service';

@Component({
  selector: 'app-obs-view-main',
  templateUrl: './obs-view-main.component.html',
  styleUrls: ['./obs-view-main.component.scss']
})
export class ObsViewMainComponent implements OnInit {
  constructor(){
    
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}
