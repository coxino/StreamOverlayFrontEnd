import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CookieService } from 'ngx-cookie';
import { BonusHunt } from 'src/assets/database/Models/BonusHunt';
import { Settings } from 'src/assets/database/Models/databaseStructure';
import { LigaUser } from 'src/assets/database/Models/LigaUser';
import { Meci } from 'src/assets/database/Models/Meci';
import { TournamentModel } from 'src/assets/database/Models/Tournament';
import { UserLoyal } from 'src/assets/database/Models/UserLoyal';
import { ClasamentPacaniada } from 'src/assets/database/Models/UserPacaniada';
import { BettingModel } from 'src/models/betting-model';
import { isDevMode } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IntervalRequestService {
  ServerPath = "";

  constructor(private httpClient: HttpClient,private cookieService: CookieService,private activatedRoute: ActivatedRoute) {
    // if(isDevMode()){
    //   this.ServerPath = Settings.ApiServerLocal;
    // }
    // else
    // {
    //   this.ServerPath = Settings.ApiServer;
    // }

    //TODO: USE PROD DATABASE IN BACKEND
    //FOR NOW USE PROD API
    this.ServerPath = Settings.ApiServer;
    console.log("Running on API : " + this.ServerPath);
  }

  GetAllGames() {
    var _token = this.cookieService.get("token") ?? "";
    var headers = {token:_token};
    var coxiUrl = "https://coxino.go.ro:5000/api/getAllGames";
    return this.httpClient.get(coxiUrl,{headers:headers});    
  }
  saveShopItems(shopItems: string) {
    var _token = this.cookieService.get("token") ?? "";
    var headers = {token:_token};
    return this.httpClient.post<any>(this.ServerPath + Settings.SaveShop,shopItems,{headers});
  }
  SaveClasament(clasamentPacaniada:ClasamentPacaniada) {
    var _token = this.cookieService.get("token") ?? "";
    var headers = {token:_token};
    return this.httpClient.post<any>(this.ServerPath + Settings.Pacaniada,clasamentPacaniada,{headers});
  }
  updateBetting(beturi:BettingModel) {
    var _token = this.cookieService.get("token") ?? "";
    var headers = {token:_token};
    return this.httpClient.post<any>(this.ServerPath + Settings.UpdateBetting,beturi,{headers});
  }
  setGiveawayWinner() {
    return this.httpClient.get(this.ServerPath + Settings.GiveAwaysSetWinner);
  }
  apiGetgiveaways() {
    return this.httpClient.get(this.ServerPath + Settings.GiveAways);
  }
  apiGetLoyaltyList() {
    var _token = this.cookieService.get("token") ?? "";
    var headers = {token:_token};
    return this.httpClient.get(this.ServerPath + Settings.LoyalityGetRanks,{headers : headers});
  }
  
  apiAddPointsAll(ammountToAdd: number,tokenW="") {
    if(tokenW == "")
    {
      var _token = this.cookieService.get("token") ?? "";
      var headers = {token:_token};
      return this.httpClient.post<any>(this.ServerPath + "loyalty/addpointsall",ammountToAdd,{headers});
    }
    else
    {
      var _token = tokenW;
      var headers = {token:_token};
      return this.httpClient.post<any>(this.ServerPath + "loyalty/addpointsall",ammountToAdd,{headers});
    }
  }
  
  apiLigaSterge(user: LigaUser) {
    var _token = this.cookieService.get("token") ?? "";
    var headers = {token:_token};
    return this.httpClient.post<any>(this.ServerPath + "ligaspecialelor/sterge",user,{headers});
  }
  
  apiSaveloyalty(EditUser: UserLoyal) {
    var _token = this.cookieService.get("token") ?? "";
    var headers = {token:_token};
    return this.httpClient.post<any>(this.ServerPath + "loyalty/updateuser",EditUser,{headers});
  }
  
  apiAddLigaUser(user:any) {
    var _token = this.cookieService.get("token") ?? "";
    var headers = {token:_token};
    return this.httpClient.post<any>(this.ServerPath + "ligaspecialelor/updateuser",user,{headers});
  }
  
  apiUpdateTESTOption()
  {
    var _token = this.cookieService.get("token") ?? "";
    var headers = {token:_token};
    return this.httpClient.post<any>(this.ServerPath + "betting/updateTESTOption",null,{headers});
  }
  
  apiSetWinners(option: string) {
    var _token = this.cookieService.get("token") ?? "";
    var headers = {token:_token,bettingOption:option};
    return this.httpClient.post<any>(this.ServerPath + Settings.SetWinner,null,{headers});
  }
  
  apiBetAsUser(bet:string,option:string,userName:string)
  {
    var _token = this.cookieService.get("token") ?? "";
    var headers = {token:_token,bettingOption:option,user:userName,amount:bet};
    return this.httpClient.post<any>(this.ServerPath + Settings.BetAsUser,null,{headers});
  }
  
  apiStartBettingFromBonusHunt(maxBet: number) {
    var _token = this.cookieService.get("token") ?? "";
    var headers = {token:_token};
    return this.httpClient.post<any>(this.ServerPath + Settings.CreateBetFromBonushunt,maxBet,{headers});
  }
  apiStartBettingFromTournament(maxBet: any) {
    var _token = this.cookieService.get("token") ?? "";
    var headers = {token:_token};
    return this.httpClient.post<any>(this.ServerPath + Settings.CreateBetFromTournament,maxBet,{headers});
  }
  apiAddToBonusHunt(LiveGame: any, bet:string) {
    var _token = this.cookieService.get("token") ?? "";
    var headers = {token:_token,betSize:bet};
    return this.httpClient.post<any>(this.ServerPath + Settings.AddSingleGameToBH,LiveGame,{headers});
  }
  apiRegisterUser(username: string, password: string, email: string) 
  {    
    var headers = {username:username,password:password,email:email};
    var body = {'':''};  
    return this.httpClient.post<any>(this.ServerPath + Settings.RegisterUser,body,{headers});
  }
  apiReSetHotWords() {
    var username = "";
    this.activatedRoute.queryParams.subscribe(params => {
      username = params['username'];
    });
    var headers = {token:username};
    return this.httpClient.post<any>(this.ServerPath + Settings.ResetHotWords,null,{headers});
  }
  apiSetInPlayGame(LiveGame: any, _betSize:any) {
    var _token = this.cookieService.get("token") ?? "";
    var headers = {
      token:_token,
      betSize:_betSize
    };
    return this.httpClient.post<any>(this.ServerPath + Settings.LiveGame,LiveGame,{headers});
  }
  apiCalificaJocul(LiveGame: any) {
    var _token = this.cookieService.get("token") ?? "";
    var headers = {token:_token};
    return this.httpClient.post<any>(this.ServerPath + Settings.LiveGame + "/calificaJoc",LiveGame,{headers});
  }
  
  apiSetInPlayGameByName(_gameName: string) {
    var _token = this.cookieService.get("token") ?? "";
    var headers = {token:_token,gameName:_gameName};
    return this.httpClient.post<any>(this.ServerPath + Settings.LiveGame,null,{headers});
  }
  
  apiSetTranzactii(_tranzactii: any) {
    var _token = this.cookieService.get("token") ?? "";
    var headers = {token:_token};
    return this.httpClient.post<any>(this.ServerPath + Settings.tranzactii,_tranzactii,{headers});
  }
  
  readLocaFile(){
    return this.httpClient.get(Settings.AllGames)
  }
  
  apiUpdateTournament(tournament:TournamentModel){
    var _token = this.cookieService.get("token") ?? "";
    var headers = {token:_token};
    return this.httpClient.post<any>(this.ServerPath + Settings.BonusBuyTournamentUpdate,tournament,{headers});
    
  }
  apiCreateTournament(fights: number,buyValue:number,TournamentModel:TournamentModel) {
    var _token = this.cookieService.get("token") ?? "";
    var headers = {token:_token};
    
    var body ={fights:fights,buyValue:buyValue,TournamentModel:TournamentModel};
    
    return this.httpClient.post<any>(this.ServerPath + Settings.BonusBuyTournamentCreate,body,{headers});
    
  }
  apiCloseCurrentFight() {
    var _token = this.cookieService.get("token") ?? "";
    var headers = {token:_token};  
    return this.httpClient.post<any>(this.ServerPath + Settings.BonusBuyTournamentLiveFightClose,"",{headers});
    
  }
  apiSaveCurrentFight(currentFight: Meci) {
    var _token = this.cookieService.get("token") ?? "";
    var headers = {token:_token};
    return this.httpClient.post<any>(this.ServerPath + Settings.BonusBuyTournamentLiveFightUpdate,currentFight,{headers});
    
  }
  
  apiDeleteBonus(bonus: string) {
    var _token = this.cookieService.get("token") ?? "";
    var headers = {token:_token,bonus:bonus};  
    return this.httpClient.post<any>(this.ServerPath + Settings.LiveBonusDelete,null,{headers});
  }   
  
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
    return this.httpClient.get(this.ServerPath + url,{headers : {'username':username}});
  }

  apiGetShopRequest()
  {
    return this.httpClient.get(this.ServerPath + Settings.ShopItems);
  }
  
  apiSetCustomTheme(url:string,_customTheme:string)
  { 
    var _token = this.cookieService.get("token") ?? "";
    var headers = {token:_token,customTheme:_customTheme};
    var body = {'':''};  
    return this.httpClient.post<any>(this.ServerPath + url,body,{headers});
  }
  
  apiLoginUser(username:string,password:string)
  {    
    var headers = {username:username,password:password};
    var body = {'':''};  
    return this.httpClient.post<any>(this.ServerPath + Settings.LoginUrl,body,{headers});
  }
  
  apiUpdateBonusHunt(bonusHunt: BonusHunt) {
    var _token = this.cookieService.get("token") ?? "";
    var headers = {token:_token};  
    return this.httpClient.post<any>(this.ServerPath + Settings.LiveBonusHuntUpdate,bonusHunt,{headers});
  }
}
