import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CookieService } from 'ngx-cookie';
import { Settings } from 'src/assets/database/Models/databaseStructure';

@Injectable({
  providedIn: 'root'
})
export class StreamerpagerequestsService {
 
  constructor(private httpClient: HttpClient,private cookieService: CookieService,private activatedRoute: ActivatedRoute) {}
  
  apiGetShopRequest(streamerID:string,localUserToken:string)
  {
    var link = Settings.ApiServer +  `streamerpage?streamerid=${streamerID}&localUserToken=${localUserToken}`;
    return this.httpClient.get(link);
  }

  apiBuyShopItem(itemID: string, streamerID: string,localUserToken:string) {
    var link = Settings.ApiServer +  `streamerpage/buyitem?streamerid=${streamerID}&localUserToken=${localUserToken}&itemid=${itemID}`;
    return this.httpClient.get(link);
  }

  apiLogUserIn(googleToken:string, googleName :string = "", googleEmail = ""){
    var link = Settings.ApiServer +  `streamerpage/viwerloginYoutube?googleToken=${googleToken}&googleName=${googleName}&googleEmail=${googleEmail}`;
    return this.httpClient.get(link);
  }

  apiGetViewerCoins(localUserToken:string,streamerID:string){
    var link = Settings.ApiServer +  `streamerpage/viwerprofile?localUserToken=${localUserToken}&streamerID=${streamerID}`;
    return this.httpClient.get(link);
  }
  
}
