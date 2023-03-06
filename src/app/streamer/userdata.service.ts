import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GoogleLoginProvider, SocialAuthService } from 'angularx-social-login';
import { SocialUser } from 'angularx-social-login/public-api';
import { CookieService } from 'ngx-cookie';
import { ToastrService } from 'ngx-toastr';
import { AuthPlatformEnum, StreamerProfilePage, ViewerLoginProfile } from 'src/models/ViewerLoginProfile';
import { StreamerpagerequestsService } from 'src/services/streamerpagerequests.service';

@Injectable({
  providedIn: 'root'
})
export class UserdataService {
  public StreamerProfilePage:StreamerProfilePage = new StreamerProfilePage();
  public ViewerLoginProfile:ViewerLoginProfile = new ViewerLoginProfile();
  public ViewerCoinsOnCurrentShop = 0;
  
  IsValidStreamer:boolean = false;
  
  private userGoogleProfile:SocialUser;
  public userTwitchProfile:any;
  StreamerCoinsName: string = 'Coins';
  
  SettingsOfThisPage:any[] = [];
  
  constructor(private requestService:StreamerpagerequestsService,
    private socialAuthService: SocialAuthService,
    private toastrService:ToastrService,
    private cookieService: CookieService,
    @Inject(DOCUMENT) private document: Document) {  
      if(cookieService.hasKey('viwer-profile'))
      {
        this.ViewerLoginProfile = cookieService.getObject('viwer-profile') as ViewerLoginProfile; 
        this.GetUserCoins(()=>{});        
        this.toastrService.success('Up to Date');        
      }
      
      this.socialAuthService.authState.subscribe((_user) => {
        this.userGoogleProfile = _user;
        requestService.apiLogYoutubeUserIn(_user.authToken, this.userGoogleProfile.lastName + ' ' + this.userGoogleProfile.firstName, this.userGoogleProfile.email).subscribe((data:any)=>{
          this.ViewerLoginProfile.LocalUserToken = data.token,
          this.ViewerLoginProfile.ProfilePicture = data.profilePicture;
          this.ViewerLoginProfile.AuthPlatform = AuthPlatformEnum.Youtube;
          var date = new Date();
          date.setDate(date.getDate() + 28 );
          this.cookieService.putObject('viwer-profile', this.ViewerLoginProfile, {expires:date});
          window.location.reload();
        });
      });
    }
    
    IsLoggedin() {
      return  this.ViewerLoginProfile?.LocalUserToken != null && this.ViewerLoginProfile?.LocalUserToken?.length > 0;
    }
    
    GetSetreamerSettingsForCurrentPage() {
      this.requestService.apiGetSettingsForStreamerPage(this.ViewerLoginProfile.LocalUserToken, this.StreamerProfilePage.streamerID).subscribe((data:any)=>{
        this.StreamerProfilePage.Infos = data.streamerSettings;
        this.IsValidStreamer = true;
        this.GetUserSettingsForCurrentPage();
      });
    }
    
    private GetUserSettingsForCurrentPage(){
      this.requestService.apiGetUserSettingsForStreamerPage(this.ViewerLoginProfile.LocalUserToken, this.StreamerProfilePage.streamerID).subscribe((data:any)=>{        
        this.SettingsOfThisPage = data.form ?? [];
        var arr1 = [...this.StreamerProfilePage.Infos.shopSettings];
        arr1.forEach(element => {
          var obj = element;
          obj.value = this.SettingsOfThisPage?.find(x=>x.key == element.key)?.value ?? ""; 
        });
        this.SettingsOfThisPage = arr1;
        this.ViewerLoginProfile.HasNotifications =  this.SettingsOfThisPage?.filter(x=>x?.value == null || x.value?.length == 0 || !x).length > 0;
        console.log(this.SettingsOfThisPage?.filter(x=>x?.value == null || x.value?.length == 0 || !x.value)?.length);
        
      });
    }
    
    SaveUserSettingsForCurrentPage(){
      this.requestService.apiSaveUserSettingsForStreamerPage(this.ViewerLoginProfile.LocalUserToken, this.StreamerProfilePage.streamerID,this.SettingsOfThisPage).subscribe((data:any)=>{
        this.toastrService.success("Information Sent");
        this.ViewerLoginProfile.HasNotifications =  this.SettingsOfThisPage?.filter(x=>x?.value == null || x.value?.length == 0).length > 0;
      });
    }
    
    VerifyUserAccount()
    {
      var redirect = encodeURIComponent(this.document.location.href);
      console.log(redirect);
      
      this.requestService.apiVerifyUserAccount(this.ViewerLoginProfile.LocalUserToken,redirect).subscribe((data:any)=>{
        this.toastrService.info(data.msg);
      });
    }
    
    /**Twitch Callback Data **/
    public twitchLoginCallback = ($event: any) =>  {
      this.userTwitchProfile = $event;
      console.log("CHECK MEMEBER");
      this.ViewerLoginProfile.AuthPlatform = AuthPlatformEnum.Twitch;     
      this.requestService.apiLogTwitchUserIn(this.userTwitchProfile.token,this.userTwitchProfile.login,this.userTwitchProfile.id,this.userTwitchProfile.email).subscribe((response:any)=>{          
        if(response.success == true){
          this.ViewerLoginProfile.AuthPlatform = AuthPlatformEnum.Twitch;   
          this.ViewerLoginProfile.LocalUserToken = response.token,
          this.ViewerLoginProfile.ProfilePicture = this.userTwitchProfile.profile_image_url;
          this.ViewerLoginProfile.UserName = this.userTwitchProfile.display_name;
          this.ViewerLoginProfile.Email = this.userTwitchProfile.email;
          var date = new Date();
          date.setDate(date.getDate() + 28 );
          this.cookieService.putObject('viwer-profile', this.ViewerLoginProfile, {expires:date});
          window.location.reload();    
        }
      });
    };
    
    loginWithGoogle(): void {
      this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID);
    }
    
    logOut(){
      this.cookieService.removeAll();
      this.ViewerLoginProfile = null;
      window.location.reload();
    }
    
    GetUserCoins(Callback:Function,CallbackError:Function = null,CallbackComplete:Function = null)
    {
      if(!this.IsLoggedin()){ Callback(); return;}
      this.requestService.apiGetViewerCoins(this.ViewerLoginProfile.LocalUserToken,this.StreamerProfilePage.streamerID).subscribe((data:any)=>{
        this.ViewerCoinsOnCurrentShop = data.coins;
        this.ViewerLoginProfile.IsMember = data.isMember;
        this.ViewerLoginProfile.Email = data.email;
        this.ViewerLoginProfile.UserName = data.name;
        this.ViewerLoginProfile.IsVerified = data.isVerified;        
        Callback();        
      },()=>{
        if(CallbackError)
        CallbackError();
      },()=>{
        if(CallbackComplete)
        CallbackComplete();
      });
    }
  }
  
  