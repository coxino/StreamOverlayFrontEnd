import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CookieService } from 'ngx-cookie';
import { Settings } from 'src/assets/database/Models/databaseStructure';
import { IntervalRequestService } from 'src/services/interval-request.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit{
  title = 'StreamOverlay';
  private themeWrapper:any = document.querySelector('html');
  Theme: any;
  isLogedIn = false;
  disableNav = true;

  constructor(private intervalRequest: IntervalRequestService,private router: Router,private cookieService: CookieService,private activatedRoute: ActivatedRoute) {   
		this.activatedRoute.queryParams.subscribe(params => {
			const _disableNav = params['disableNav'];
      if(_disableNav != null || _disableNav != undefined)
			this.disableNav = _disableNav == true;

      //const username = params['username'];
      this.intervalRequest.apiGetRequest(Settings.CustomTheme).subscribe((data:any) =>{	
        this.Theme = data;       
        this.SetTheme();
      });
		});	
    this.isLogedIn = this.cookieService.get('token') != null;

   
  }
  ngOnInit(): void {
    //location.reload();
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

  SetTheme() {
    this.themeWrapper.style.setProperty('--backgroundColor',     this.Theme.Colors.backgroundColor);
    this.themeWrapper.style.setProperty('--textColor',     this.Theme.Colors.textColor);
    this.themeWrapper.style.setProperty('--bordersColor',     this.Theme.Colors.bordersColor);
    this.themeWrapper.style.setProperty('--bracketBackColor',     this.Theme.Colors.bracketBackColor);
    this.themeWrapper.style.setProperty('--iconsBackColor',     this.Theme.Colors.iconsBackColor);
    this.themeWrapper.style.setProperty('--iconsForeColor',     this.Theme.Colors.iconsForeColor);
    this.themeWrapper.style.setProperty('--borderRadiusMain',     this.Theme.Options.borderSize + "px");
    this.themeWrapper.style.setProperty('--borderRadiusInner',     this.Theme.Options.borderRadius + "px");
    
    this.themeWrapper.style.setProperty('--borderMainBorderColor',     this.Theme.Options.borderMainBorderColor);
    
    this.themeWrapper.style.setProperty('--color1',     this.Theme.Options.animatedBorderColors.color1);
    this.themeWrapper.style.setProperty('--color2',     this.Theme.Options.animatedBorderColors.color2);
    this.themeWrapper.style.setProperty('--color3',     this.Theme.Options.animatedBorderColors.color3);
    this.themeWrapper.style.setProperty('--color4',     this.Theme.Options.animatedBorderColors.color4);
    this.themeWrapper.style.setProperty('--color5',     this.Theme.Options.animatedBorderColors.color5);
    this.themeWrapper.style.setProperty('--color6',     this.Theme.Options.animatedBorderColors.color6);
    this.themeWrapper.style.setProperty('--color7',     this.Theme.Options.animatedBorderColors.color7);
}
}



