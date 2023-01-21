import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie';

@Component({
  selector: 'app-configure-obs',
  templateUrl: './configure-obs.component.html',
  styleUrls: ['./configure-obs.component.scss']
})
export class ConfigureObsComponent implements OnInit {
  website = window.location.origin;
  username:string;
  public themeWrapper:any = document.querySelector('html');
  constructor(private cookieService: CookieService) {
    this.username = this.cookieService?.get("username")?.replace(/\s/g, "") ?? "coxino2"; 
    this.themeWrapper.style.setProperty('--fit-content' ,'100%'); 
   }
   
   ngOnInit(): void {
   }

   copy(str:any)
   {
    document.addEventListener('copy', (e: ClipboardEvent) => {
      e.clipboardData.setData('text/plain', (str));
      e.preventDefault();
      document.removeEventListener('copy', null);
    });
    document.execCommand('copy');
   }

   websites = [
    {
      nume:"BonusHunt",
      path:"obs/bonushunt", 
      description:"",
      displaypos:"two-cols",
      width:500,
      height:650
    },
    {
      nume:"Current Game",
      path:"obs/inplay",      
      description:"Join our discord server to download the chrome extension that automaticaly update games.",
      displaypos:"two-rows",
      width:800,
      height:150,
    }, 
    {
      nume:"Tournament Bracket",
      path:"obs/tournamentbracket", 
      description:"-",
      displaypos:"two-cols",
      width:350,
      height:650
    },
    {
      nume:"Tournament Current Battle",
      path:"obs/tournamentscore",      
      description:"width may need to be adjusted over original width if you add more tournament rounds",
      displaypos:"two-rows",
      width:800,
      height:120,
    },   
    {
      nume:"Comunity Bets",
      path:"obs/betting",      
      description:"Join our discord server to download the latest Streamlabs Chatbot scripts.",
      displaypos:"two-cols",
      width:300,
      height:720,
    },
    {
      nume:"Hot Words",
      path:"obs/hotwords",      
      description:"Join our discord server to download the latest Streamlabs Chatbot scripts.",
      displaypos:"two-cols",
      width:300,
      height:300,
    },
    {
      nume:"Hot Words Pool",
      path:"obs/variante",      
      description:"Join our discord server to download the latest Streamlabs Chatbot scripts.",
      displaypos:"two-cols",
      width:500,
      height:550,
    },

  ]

}
