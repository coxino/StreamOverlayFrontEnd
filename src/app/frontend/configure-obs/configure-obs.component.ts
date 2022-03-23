import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie';

@Component({
  selector: 'app-configure-obs',
  templateUrl: './configure-obs.component.html',
  styleUrls: ['./configure-obs.component.scss']
})
export class ConfigureObsComponent implements OnInit {
  username:string;
  constructor(private cookieService: CookieService) {
    this.username = this.cookieService.get("username").replace(/\s/g, ""); 
   }
   private themeWrapper:any = document.querySelector('html');
   ngOnInit(): void {
     this.themeWrapper.style.setProperty('--overflow',     "visible");
   }

}
