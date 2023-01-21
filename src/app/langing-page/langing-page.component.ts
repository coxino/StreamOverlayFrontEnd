import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CookieService } from 'ngx-cookie';
import { Settings } from 'src/assets/database/Models/databaseStructure';
import { SiteSettings } from 'src/assets/SiteSettings';
import { IntervalRequestService } from 'src/services/interval-request.service';

@Component({
  selector: 'app-langing-page',
  templateUrl: './langing-page.component.html',
  styleUrls: ['./langing-page.component.scss']
})
export class LangingPageComponent implements OnInit {
  
  title = SiteSettings.SiteName;
  
  constructor(){}
  ngOnInit(): void {}  
}
