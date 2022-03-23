import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.scss']
})
export class MainpageComponent implements OnInit {
  href: string;
  hrefbf: string;
  hrefbh: string;

  constructor() { 
    this.href = window.location.origin + "/bfnext?username=coxino2&disableNav=true";
    this.hrefbf = window.location.origin + "/bf?username=coxino2&disableNav=true";
    this.hrefbh = window.location.origin + "/bh?username=coxino2&disableNav=true";
  }

  ngOnInit(): void {
  }

}
