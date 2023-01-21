import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie';
import { SiteSettings } from 'src/assets/SiteSettings';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss']
})
export class NavigationBarComponent implements OnInit {  
  showLoginBox = false;
  isLogedIn = false;
  title: string = SiteSettings.SiteName;
  
  constructor(private router: Router,private cookieService: CookieService) {   
    this.isLogedIn = this.cookieService.get('token') != null;
  }
  
  ngOnInit(): void {
  }
  
  
  logout()
  {
    this.isLogedIn = false;
    this.cookieService.removeAll();  
    this.router.navigate(['/'], { queryParams: { } });  
  }
  
  login()
  {
    this.showLoginBox = !this.showLoginBox;
  }
  
}
