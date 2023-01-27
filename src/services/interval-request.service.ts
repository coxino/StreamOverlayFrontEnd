import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CookieService } from 'ngx-cookie';
import { BonusHunt } from 'src/assets/database/Models/BonusHunt';
import { Settings } from 'src/assets/database/Models/databaseStructure';
import { LigaUser } from 'src/assets/database/Models/LigaUser';
import { Meci } from 'src/assets/database/Models/Meci';
import { ShopItem } from 'src/assets/database/Models/ShopItem';
import { TournamentModel } from 'src/assets/database/Models/Tournament';
import { UserLoyal } from 'src/assets/database/Models/UserLoyal';
import { ClasamentPacaniada } from 'src/assets/database/Models/UserPacaniada';
import { BettingModel } from 'src/models/betting-model';

@Injectable({
  providedIn: 'root'
})
export class IntervalRequestService {
  getAllRedeems() {
    var _token = this.cookieService.get("token") ?? "";
    var link = Settings.ApiServer +  `streamersettings/getredeems?token=${_token}`;
    return this.httpClient.get(link);
  }
  getStreamerSettings(){
    var _token = this.cookieService.get("token") ?? "";
    var link = Settings.ApiServer +  `streamersettings/getstreamersettings?token=${_token}`;
    return this.httpClient.get(link);
  }
  setStreamerSettings(_settings:any){
    var _token = this.cookieService.get("token") ?? "";
    var link = Settings.ApiServer +  `streamersettings/savestreamersettings?token=${_token}`;
    return this.httpClient.post<any>(link,_settings);
  }
  apiLogUserIn(authToken: string) {
    var _token = this.cookieService.get("token") ?? "";
    var link = Settings.ApiServer +  `streamersettings/setyoutubetoken?token=${_token}&youtubetoken=${authToken}`;
    return this.httpClient.get(link);
  }
  GetAllGames() {
    var _token = this.cookieService.get("token") ?? "";
    var headers = {token:_token};
    var coxiUrl = Settings.ApiServer + "getAllGames";
    return this.httpClient.get(coxiUrl,{headers:headers});    
  }
  saveShopItems(shopItems: ShopItem[]) {
    var _token = this.cookieService.get("token") ?? "";
    var headers = {token:_token};
    return this.httpClient.post<any>(Settings.ApiServer + Settings.SaveShop,shopItems,{headers});
  }
  SaveClasament(clasamentPacaniada:ClasamentPacaniada) {
    var _token = this.cookieService.get("token") ?? "";
    var headers = {token:_token};
    return this.httpClient.post<any>(Settings.ApiServer + Settings.Pacaniada,clasamentPacaniada,{headers});
  }
  updateBetting(beturi:BettingModel) {
    var _token = this.cookieService.get("token") ?? "";
    var headers = {token:_token};
    return this.httpClient.post<any>(Settings.ApiServer + Settings.UpdateBetting,beturi,{headers});
  }
  setGiveawayWinner() {
    return this.httpClient.get(Settings.ApiServer + Settings.GiveAwaysSetWinner);
  }
  apiGetgiveaways() {
    return this.httpClient.get(Settings.ApiServer + Settings.GiveAways);
  }
  apiGetLoyaltyList() {
    var _token = this.cookieService.get("token") ?? "";
    var headers = {token:_token};
    return this.httpClient.get(Settings.ApiServer + Settings.LoyalityGetRanks,{headers : headers});
  }
  
  apiAddPointsAll(ammountToAdd: number,tokenW="") {
    if(tokenW == "")
    {
      var _token = this.cookieService.get("token") ?? "";
      var headers = {token:_token};
      return this.httpClient.post<any>(Settings.ApiServer + "loyalty/addpointsall",ammountToAdd,{headers});
    }
    else
    {
      var _token = tokenW;
      var headers = {token:_token};
      return this.httpClient.post<any>(Settings.ApiServer + "loyalty/addpointsall",ammountToAdd,{headers});
    }
  }
  
  apiLigaSterge(user: LigaUser) {
    var _token = this.cookieService.get("token") ?? "";
    var headers = {token:_token};
    return this.httpClient.post<any>(Settings.ApiServer + "ligaspecialelor/sterge",user,{headers});
  }
  
  apiSaveloyalty(EditUser: UserLoyal) {
    var _token = this.cookieService.get("token") ?? "";
    var headers = {token:_token};
    return this.httpClient.post<any>(Settings.ApiServer + "loyalty/updateuser",EditUser,{headers});
  }
  
  apiAddLigaUser(user:any) {
    var _token = this.cookieService.get("token") ?? "";
    var headers = {token:_token};
    return this.httpClient.post<any>(Settings.ApiServer + "ligaspecialelor/updateuser",user,{headers});
  }
  
  apiUpdateTESTOption()
  {
    var _token = this.cookieService.get("token") ?? "";
    var headers = {token:_token};
    return this.httpClient.post<any>(Settings.ApiServer + "betting/updateTESTOption",null,{headers});
  }
  
  apiSetWinners(option: string) {
    var _token = this.cookieService.get("token") ?? "";
    var headers = {token:_token,bettingOption:option};
    return this.httpClient.post<any>(Settings.ApiServer + Settings.SetWinner,null,{headers});
  }
  
  apiBetAsUser(bet:string,option:string,userName:string)
  {
    var _token = this.cookieService.get("token") ?? "";
    var headers = {token:_token,bettingOption:option,user:userName,amount:bet};
    return this.httpClient.post<any>(Settings.ApiServer + Settings.BetAsUser,null,{headers});
  }
  
  apiStartBettingFromBonusHunt(maxBet: number) {
    var _token = this.cookieService.get("token") ?? "";
    var headers = {token:_token};
    return this.httpClient.post<any>(Settings.ApiServer + Settings.CreateBetFromBonushunt,maxBet,{headers});
  }
  apiStartBettingFromTournament(maxBet: any) {
    var _token = this.cookieService.get("token") ?? "";
    var headers = {token:_token};
    return this.httpClient.post<any>(Settings.ApiServer + Settings.CreateBetFromTournament,maxBet,{headers});
  }
  apiAddToBonusHunt(LiveGame: any, bet:string) {
    var _token = this.cookieService.get("token") ?? "";
    var headers = {token:_token,betSize:bet};
    return this.httpClient.post<any>(Settings.ApiServer + Settings.AddSingleGameToBH,LiveGame,{headers});
  }
  apiRegisterUser(username: string, password: string, email: string) 
  {    
    var headers = {username:username,password:password,email:email};
    var body = {'':''};  
    return this.httpClient.post<any>(Settings.ApiServer + Settings.RegisterUser,body,{headers});
  }
  apiReSetHotWords() {
    var username = "";
    this.activatedRoute.queryParams.subscribe(params => {
      username = params['username'];
    });
    var headers = {token:username};
    return this.httpClient.post<any>(Settings.ApiServer + Settings.ResetHotWords,null,{headers});
  }
  apiSetInPlayGame(LiveGame: any, _betSize:any) {
    var _token = this.cookieService.get("token") ?? "";
    var headers = {
      token:_token,
      betSize:_betSize
    };
    return this.httpClient.post<any>(Settings.ApiServer + Settings.LiveGame,LiveGame,{headers});
  }
  apiCalificaJocul(LiveGame: any) {
    var _token = this.cookieService.get("token") ?? "";
    var headers = {token:_token};
    return this.httpClient.post<any>(Settings.ApiServer + Settings.LiveGame + "/calificaJoc",LiveGame,{headers});
  }
  
  apiSetInPlayGameByName(_gameName: string) {
    var _token = this.cookieService.get("token") ?? "";
    var headers = {token:_token,gameName:_gameName};
    return this.httpClient.post<any>(Settings.ApiServer + Settings.LiveGame,null,{headers});
  }
  
  apiSetTranzactii(_tranzactii: any) {
    var _token = this.cookieService.get("token") ?? "";
    var headers = {token:_token};
    return this.httpClient.post<any>(Settings.ApiServer + Settings.tranzactii,_tranzactii,{headers});
  }
  
  readLocaFile(){
    return this.httpClient.get(Settings.AllGames)
  }
  
  apiUpdateTournament(tournament:TournamentModel){
    var _token = this.cookieService.get("token") ?? "";
    var headers = {token:_token};
    return this.httpClient.post<any>(Settings.ApiServer + Settings.BonusBuyTournamentUpdate,tournament,{headers});
    
  }
  apiCreateTournament(fights: number,buyValue:number,TournamentModel:TournamentModel) {
    var _token = this.cookieService.get("token") ?? "";
    var headers = {token:_token};
    
    var body ={fights:fights,buyValue:buyValue,TournamentModel:TournamentModel};
    
    return this.httpClient.post<any>(Settings.ApiServer + Settings.BonusBuyTournamentCreate,body,{headers});
    
  }
  apiCloseCurrentFight() {
    var _token = this.cookieService.get("token") ?? "";
    var headers = {token:_token};  
    return this.httpClient.post<any>(Settings.ApiServer + Settings.BonusBuyTournamentLiveFightClose,"",{headers});
    
  }
  apiSaveCurrentFight(currentFight: Meci) {
    var _token = this.cookieService.get("token") ?? "";
    var headers = {token:_token};
    return this.httpClient.post<any>(Settings.ApiServer + Settings.BonusBuyTournamentLiveFightUpdate,currentFight,{headers});
    
  }
  
  apiDeleteBonus(bonus: string) {
    var _token = this.cookieService.get("token") ?? "";
    var headers = {token:_token,bonus:bonus};  
    return this.httpClient.post<any>(Settings.ApiServer + Settings.LiveBonusDelete,null,{headers});
  } 
  
  constructor(private httpClient: HttpClient,private cookieService: CookieService,private activatedRoute: ActivatedRoute) {}
  
  apiGetRequest(url:string,username:string = "")
  {
    if(username == "")
    {
      username = this.cookieService.get("username") ?? "";
      if(username == "")
      {
        this.activatedRoute.queryParams.subscribe(params => {
          username = params['username'];
        });
      }
    }
    return this.httpClient.get(Settings.ApiServer + url,{headers : {'username':username}});
  }

  apiGetShopRequest()
  {
    var username = this.cookieService.get("username")
    return this.httpClient.get(Settings.ApiServer + Settings.ShopItems + username);
  }
  
  apiSetCustomTheme(url:string,_customTheme:string)
  { 
    var _token = this.cookieService.get("token") ?? "";
    var headers = {token:_token,customTheme:_customTheme};
    var body = {'':''};  
    return this.httpClient.post<any>(Settings.ApiServer + url,body,{headers});
  }
  
  apiLoginUser(username:string,password:string)
  {    
    var headers = {username:username,password:password};
    var body = {'':''};  
    return this.httpClient.post<any>(Settings.ApiServer + Settings.LoginUrl,body,{headers});
  }
  
  apiUpdateBonusHunt(bonusHunt: BonusHunt) {
    var _token = this.cookieService.get("token") ?? "";
    var headers = {token:_token};  
    return this.httpClient.post<any>(Settings.ApiServer + Settings.LiveBonusHuntUpdate,bonusHunt,{headers});
  }

  CheckIfStreamerExists(streamerID:string){
    return this.httpClient.get(Settings.ApiServer + Settings.StreamerPage + streamerID);
  }
}
