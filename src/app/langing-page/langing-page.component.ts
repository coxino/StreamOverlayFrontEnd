import { Component, OnInit } from '@angular/core';
import { SiteSettings } from 'src/assets/SiteSettings';

@Component({
  selector: 'app-langing-page',
  templateUrl: './langing-page.component.html',
  styleUrls: ['./langing-page.component.scss']
})
export class LangingPageComponent implements OnInit {
  version = SiteSettings.Version;
  title = SiteSettings.SiteName;
  
  constructor(){}
  ngOnInit(): void {}  
}
