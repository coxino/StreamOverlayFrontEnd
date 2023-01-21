import { Component, OnInit } from '@angular/core';
import { SiteSettings } from 'src/assets/SiteSettings';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.scss']
})
export class MainpageComponent implements OnInit {
  SiteSettings = SiteSettings;
  constructor() { 
    
  }

  ngOnInit(): void {
  }

}
