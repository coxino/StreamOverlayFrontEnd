import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CookieService } from 'ngx-cookie';
import { Settings } from 'src/assets/database/Models/databaseStructure';
import { IntervalRequestService } from 'src/services/interval-request.service';
import { Router } from '@angular/router';
import { CustomTheme } from 'src/assets/database/Models/CustomTheme';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent{
  title = 'StreamOverlay';
  isLogedIn = false;
  
  constructor(private router: Router,private cookieService: CookieService) { 
    this.isLogedIn = this.cookieService.get('token') != null;      
  }

  logout()
  {
    this.isLogedIn = false;
    this.cookieService.removeAll();    
    this.router.routeReuseStrategy.shouldReuseRoute = function () {
      return false;
    };  
    this.login();
  }
  
  login()
  {
    this.cookieService.removeAll();    
    this.router.routeReuseStrategy.shouldReuseRoute = function () {
      return false;
    };  
    this.router.navigateByUrl('#');
  }
}



