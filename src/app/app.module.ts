import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BonusHuntComponent } from './obsViews/bonus-hunt/bonus-hunt.component';
import { TournamentLivebattleComponent } from './obsViews/tournament-livebattle/tournament-livebattle.component';
import { TournamentLivebattleNextComponent } from './obsViews/tournament-livebattle-next/tournament-livebattle-next.component';
import { HasLostPipe, SumPipe, SumPipeSimple } from 'src/pipes/sumpipe';
import { IntervalRequestService } from 'src/services/interval-request.service';
import { AnimatedBorderComponent } from './obsViews/animated-border/animated-border.component';
import { TheInnerBonushuntComponent } from './obsViews/the-inner-bonushunt/the-inner-bonushunt.component';
import { SafePipe } from 'src/pipes/SafePipe';
import { BettingComponent } from './obsViews/betting/betting.component';
import { HotwordsComponent } from './obsViews/hotwords/hotwords.component';
import { ColorPickerModule } from '@syncfusion/ej2-angular-inputs';
import { CustomThemeEditorComponent } from './frontend/custom-theme-editor/custom-theme-editor.component';
import { CookieModule } from 'ngx-cookie';
import { LoginComponent } from './frontend/login/login.component';
import { BonushuntEditorComponent } from './frontend/bonushunt-editor/bonushunt-editor.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { TournamentComponent } from './frontend/tournament/tournament.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgToggleModule } from '@nth-cloud/ng-toggle';
import { TranzactiiComponent } from './frontend/tranzactii/tranzactii.component';
import { ConfigureObsComponent } from './frontend/configure-obs/configure-obs.component';
import { BasicBackgroundComponent } from './Backgrounds/basic-background/basic-background.component';
import { UpdateLogComponent } from './version/update-log/update-log.component';
import { TestbetsComponent } from './testing/testbets/testbets.component';
import { LoyaltyComponent } from './frontend/loyalty/loyalty.component';
import { EmailAsteriskPipe } from 'src/pipes/HashPipe';
import { LigaComponent } from './ghinionistii/liga/liga.component';
import { LigaobsComponent } from './ghinionistii/ligaobs/ligaobs.component';
import { LigainnerComponent } from './ghinionistii/ligainner/ligainner.component';
import { ClipboardModule } from 'ngx-clipboard';
import { GiveawayComponent } from './frontend/giveaway/giveaway.component';
import { SpinningwheelComponent } from './obsViews/spinningwheel/spinningwheel.component';
import { NgxWheelModule } from 'ngx-wheel';
import { PaysafewheelComponent } from './paysafewheel/paysafewheel.component';
import { BettingEditComponent } from './frontend/betting-edit/betting-edit.component';
import { PacaniadaComponent } from './obsViews/pacaniada/pacaniada.component';
import { PacaniadaComponentE } from './frontend/pacaniada/pacaniada.component';
import { ShopEditorComponent } from './shop-editor/shop-editor.component';
import { RoataAniversaraComponent } from './roata-aniversara/roata-aniversara.component';
import { InscrisiLaGiveawayComponent } from './inscrisi-la-giveaway/inscrisi-la-giveaway.component';
import { VoteNeedGreedComponent } from './vote-need-greed/vote-need-greed.component';
import { SpinGreedComponent } from './spin-greed/spin-greed.component';
import { BattleRoyaleComponent } from './battle-royale/battle-royale.component';
import { BattleRoyaleEditComponent } from './frontent/battle-royale-edit/battle-royale-edit.component';
import { BattleRoyaleClasamentComponent } from './obsViews/battle-royale-clasament/battle-royale-clasament.component';
import { VarianteComponent } from './obsViews/variante/variante.component';
import { LangingPageComponent } from './langing-page/langing-page.component';
import { NewInplayComponent } from './obs-views/new-inplay/new-inplay.component';
import { NavigationBarComponent } from './Navigation/navigation-bar/navigation-bar.component';
import { EditorComponent } from './editor/editor.component';
import { EditorRoutingModule } from './editor-routing.module';
import { ObsviewerComponent } from './obsviewer/obsviewer.component';
import { ObsviewsRoutingModule } from './obsviews-routing.module';
import { EditorHomePageComponent } from './editor/editor-home-page/editor-home-page.component';
import { ToastrModule } from 'ngx-toastr';
import { TournamentTooltipComponent } from './tooltips/tournament-tooltip/tournament-tooltip.component';
import { BonushuntTooltipComponent } from './tooltips/bonushunt-tooltip/bonushunt-tooltip.component';
import { GoogleLoginProvider, SocialAuthServiceConfig, SocialLoginModule } from 'angularx-social-login';
import { TwitchLoginSdkModule } from 'twitch-login-sdk';
import { UserdataService } from './streamer/userdata.service';
import { RedeemspageComponent } from './shop-editor/redeemspage/redeemspage.component';
import { SettingsPageComponent } from './shop-editor/settings-page/settings-page.component';
import { RoyaleRumbleComponent } from './obs-views/royale-rumble/royale-rumble.component';
import { RoyaleRumbleEditComponent } from './frontend/royale-rumble-edit/royale-rumble-edit.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { RtptovolPipe } from './commonpipes/rtptovol.pipe';

@NgModule({
  declarations: [
    AppComponent,
    BonusHuntComponent,
    TournamentLivebattleComponent,
    TournamentLivebattleNextComponent,
    SumPipe,
    SumPipeSimple,
    HasLostPipe,
    SafePipe,
    EmailAsteriskPipe,
    AnimatedBorderComponent,
    TheInnerBonushuntComponent,
    BettingComponent,
    HotwordsComponent,
    CustomThemeEditorComponent,
    LoginComponent,
    BonushuntEditorComponent,
    MainpageComponent,
    TournamentComponent,
    TranzactiiComponent,
    ConfigureObsComponent,
    BasicBackgroundComponent,
    UpdateLogComponent,
    TestbetsComponent,
    LoyaltyComponent,
    LigaComponent,
    LigaobsComponent,
    LigainnerComponent,
    GiveawayComponent,
    SpinningwheelComponent,
    PaysafewheelComponent,
    BettingEditComponent,
    PacaniadaComponent,
    PacaniadaComponentE,
    ShopEditorComponent,
    RoataAniversaraComponent,
    InscrisiLaGiveawayComponent,
    VoteNeedGreedComponent,
    SpinGreedComponent,
    BattleRoyaleComponent,
    BattleRoyaleEditComponent,
    BattleRoyaleClasamentComponent,
    VarianteComponent,
    LangingPageComponent,
    NewInplayComponent,
    NavigationBarComponent,
    EditorComponent,
    ObsviewerComponent,
    EditorHomePageComponent,
    TournamentTooltipComponent,
    BonushuntTooltipComponent,
    RedeemspageComponent,
    SettingsPageComponent,
    RoyaleRumbleComponent,
    RoyaleRumbleEditComponent,
    RtptovolPipe,
    ],
  imports: [    
    Ng2SearchPipeModule,
    SocialLoginModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ColorPickerModule,
    FormsModule,
    CookieModule.forRoot(),
    NgbModule,
    NgToggleModule,
    ClipboardModule,
    ReactiveFormsModule,
    NgxWheelModule,
    EditorRoutingModule,
    ObsviewsRoutingModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    TwitchLoginSdkModule.forRoot({ 
      twitchId:  "nhtoulxff6s02iv9kw9ztfmmciqz2r", //<******* YOUR TWITCH_ID 👈      
      redirect:  "https://coxino.ro/editor/shop" //<***** YOUR CALLBACK REDIRECT 👈redirect_uri
  })
  ],
  providers: [IntervalRequestService,UserdataService,
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {  
        autoLogin: false,      
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,          
            provider: new GoogleLoginProvider(
              '245884125377-c6kqdrfpr602abhaa8m3g3cqeluctpod.apps.googleusercontent.com', { scope: 'https://www.googleapis.com/auth/youtube.readonly', }
            )         
          }          
        ]
      } as SocialAuthServiceConfig,
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }

//SET NODE_OPTIONS=--openssl-legacy-provider
