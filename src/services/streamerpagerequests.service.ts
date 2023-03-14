import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CookieService } from 'ngx-cookie';
import { Settings } from 'src/assets/database/Models/databaseStructure';

@Injectable({
  providedIn: 'root'
})
export class StreamerpagerequestsService {
  
  defaultHeader:HttpHeaders = new HttpHeaders;
  constructor(private httpClient: HttpClient,private cookieService: CookieService,private activatedRoute: ActivatedRoute) {
    this.defaultHeader.append('Access-Control-Allow-Origin', '*');
    this.defaultHeader.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    this.defaultHeader.append('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  }
  
  apiGetShopRequest(streamerID:string,localUserToken:string)
  {
    var link = Settings.ApiServer +  `streamerpage?streamerid=${streamerID}&localUserToken=${localUserToken}`;
    return this.httpClient.get(link);
  }

  apiBuyShopItem(itemID: string, streamerID: string,localUserToken:string) {
    var link = Settings.ApiServer +  `streamerpage/buyitem?streamerid=${streamerID}&localUserToken=${localUserToken}&itemid=${itemID}`;
    return this.httpClient.get(link);
  }

  apiLogYoutubeUserIn(googleToken:string, googleName :string = "", googleEmail = ""){
    var link = Settings.ApiServer +  `streamerpage/viwerloginYoutube?googleToken=${googleToken}&googleName=${googleName}&googleEmail=${googleEmail}`;
    return this.httpClient.get(link);
  }

  apiLogTwitchUserIn(twitchToken:string, twitchName :string, twitchId:string,twitchEmail:string){
    var link = Settings.ApiServer +  `streamerpage/viwerloginTwitch?twitchToken=${twitchToken}&twitchName=${twitchName}&twitchId=${twitchId}&twitchEmail=${twitchEmail}`;
    return this.httpClient.get(link);
  }

  apiGetViewerCoins(localUserToken:string,streamerID:string){
    var link = Settings.ApiServer +  `streamerpage/viwerprofile?localUserToken=${localUserToken}&streamerID=${streamerID}`;
    return this.httpClient.get(link);
  }

  apiGetSettingsForStreamerPage(localUserToken:string,streamerId:string){
    var link = Settings.ApiServer +  `streamersettings/getstreamerviewerformsetting?localUserToken=${localUserToken}&streamerId=${streamerId}`;
    return this.httpClient.get(link);
  }

  apiSaveUserSettingsForStreamerPage(localUserToken:string,streamerId:string,viewerForm:any[]){
    var link = Settings.ApiServer +  `streamersettings/saveusersettingsforstreamerpage?localUserToken=${localUserToken}&streamerId=${streamerId}`;
    //var headers = {localUserToken:localUserToken,streamerId:streamerId};
    return this.httpClient.post<any>(link,viewerForm);
  }

  requestPromotions(streamerID:string) {
    var link = Settings.ApiServer + `promo/getallpromo?streamerid=${streamerID}`;
    return this.httpClient.get(link);
  }

  hasClicked(streamerID:string,promoname:string) {
    var link = Settings.ApiServer + `promo/hasclicked?streamerid=${streamerID}&promoname=${promoname}`;
    return this.httpClient.get(link);
  }

  apiGetUserSettingsForStreamerPage(localUserToken:string,streamerId:string){
    var link = Settings.ApiServer +  `streamersettings/getusersettingsforstreamerpage?localUserToken=${localUserToken}&streamerId=${streamerId}`;
    return this.httpClient.get(link);
  }

  apiVerifyUserAccount(userID: string,redirect:string) {    
    var link = Settings.ApiServer + `shop/genvalcode?userID=${userID}&redirect=${redirect}`;
    return this.httpClient.get(link);
  }

  requestGiveaways(localUserToken:string, streamerID:string) {
    var coxiUrl = `https://coxino.go.ro:5000/api/giveaway?localUserToken=` + localUserToken + `&streamerid=${streamerID}`;
    return this.httpClient.get(coxiUrl,{headers:this.defaultHeader});    
  }

  buyTicket(gid: any, localUserToken: string, streamerID:string) {
    var coxiUrl = `https://coxino.go.ro:5000/api/giveaway/buyTiket?localUserToken=` + localUserToken + `&givewayId=${gid}&streamerid=${streamerID}`;    
    return this.httpClient.get(coxiUrl,{headers:this.defaultHeader});
  }
}
