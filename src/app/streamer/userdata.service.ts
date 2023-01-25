import { Injectable } from '@angular/core';
import { GoogleLoginProvider, SocialAuthService } from 'angularx-social-login';
import { SocialUser } from 'angularx-social-login/public-api';
import { CookieService } from 'ngx-cookie';
import { AuthPlatformEnum, ViewerLoginProfile } from 'src/models/ViewerLoginProfile';
import { StreamerpagerequestsService } from 'src/services/streamerpagerequests.service';

@Injectable({
  providedIn: 'root'
})
export class UserdataService {
  public ViewerLoginProfile:ViewerLoginProfile = new ViewerLoginProfile();
  public ViewerCoinsOnCurrentShop = 0;

  private userGoogleProfile:SocialUser;
  private userTwitchProfile:any;
  StreamerCoinsName: string = 'Coins';
  
  constructor(private requestService:StreamerpagerequestsService,
    private socialAuthService: SocialAuthService,
    private cookieService: CookieService) {   

      if(cookieService.hasKey('viwer-profile'))
      {
       this.ViewerLoginProfile = cookieService.getObject('viwer-profile') as ViewerLoginProfile;
       this.GetUserCoins(()=>{});
      }

      this.socialAuthService.authState.subscribe((_user) => {
        this.userGoogleProfile = _user;
        requestService.apiLogUserIn(_user.authToken, this.userGoogleProfile.lastName + ' ' + this.userGoogleProfile.firstName, this.userGoogleProfile.email).subscribe((data:any)=>{
          this.ViewerLoginProfile.LocalUserToken = data.token,
          this.ViewerLoginProfile.ProfilePicture = data.profilePicture;
          this.ViewerLoginProfile.AuthPlatform = AuthPlatformEnum.Youtube;
          this.cookieService.putObject('viwer-profile', this.ViewerLoginProfile);
          window.location.reload();
        });
      });
      
    }
    
    IsLoggedin() {
      return  this.ViewerLoginProfile?.LocalUserToken != null && this.ViewerLoginProfile?.LocalUserToken?.length > 0;
    }
    
    /**Twitch Callback Data **/
    public twitchLoginCallback = ($event: any) =>  {
      this.userTwitchProfile = $event;
      // this.requestService.apiLogUserIn(this.userTwitchProfile.login,"twitch").subscribe((response:any)=>{          
      //   // this.LocalUserTokenSubject$.next(response.token); 
      //   this.ViewerLoginProfile.AuthPlatform = AuthPlatformEnum.Twitch;        
      // });
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
      this.requestService.apiGetViewerCoins(this.ViewerLoginProfile.LocalUserToken,this.ViewerLoginProfile.StreamerID).subscribe((data:any)=>{
        this.ViewerCoinsOnCurrentShop = data.coins;
        this.ViewerLoginProfile.IsMember = data.isMember;
        this.ViewerLoginProfile.Email = data.email;
        this.ViewerLoginProfile.UserName = data.name;
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
  
  