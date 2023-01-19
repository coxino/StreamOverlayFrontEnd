import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BonusHuntComponent } from './obsViews/bonus-hunt/bonus-hunt.component';
import { TournamentLivebattleComponent } from './obsViews/tournament-livebattle/tournament-livebattle.component';
import { TournamentLivebattleNextComponent } from './obsViews/tournament-livebattle-next/tournament-livebattle-next.component';
import { InPlayComponent } from './obsViews/in-play/in-play.component';
import { SumPipe } from 'src/pipes/sumpipe';
import { IntervalRequestService } from 'src/services/interval-request.service';
import { TheInnerBonushuntComponent } from './obsViews/the-inner-bonushunt/the-inner-bonushunt.component';
import { ViewWalletComponent } from './obsViews/WalletView/view-wallet.component';
import { SafePipe } from 'src/pipes/SafePipe';
import { BettingComponent } from './obsViews/betting/betting.component';
import { HotwordsComponent } from './obsViews/hotwords/hotwords.component';
import { ColorPickerModule } from '@syncfusion/ej2-angular-inputs';
import { CustomThemeEditorComponent } from './Old-app-components/custom-theme-editor/custom-theme-editor.component';
import { CookieModule } from 'ngx-cookie';
import { LoginComponent } from './Old-app-components/login/login.component';
import { BonushuntEditorComponent } from './Old-app-components/bonushunt-editor/bonushunt-editor.component';
import { MainpageComponent } from './Old-app-components/mainpage/mainpage.component';
import { TournamentComponent } from './Old-app-components/tournament/tournament.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgToggleModule } from '@nth-cloud/ng-toggle';
import { SetInplayComponent } from './Old-app-components/set-inplay/set-inplay.component';
import { EditWalletComponent } from './Old-app-components/Wallet/edit-wallet.component';
import { ConfigureObsComponent } from './Old-app-components/configure-obs/configure-obs.component';
import { UpdateLogComponent } from './version/update-log/update-log.component';
import { LoialityComponent } from './obsViews/loiality/loiality.component';
import { TestbetsComponent } from './testing/testbets/testbets.component';
import { LoyaltyComponent } from './Old-app-components/loyalty/loyalty.component';
import { EmailAsteriskPipe } from 'src/pipes/HashPipe';
import { AlertwebsiteComponent } from './obsViews/alertwebsite/alertwebsite.component';
import { OfertacurentaComponent } from './obsViews/ofertacurenta/ofertacurenta.component';
import { LigaComponent } from './Old-app-components/liga/liga.component';
import { LigaobsComponent } from './Old-app-components/ligaobs/ligaobs.component';
import { LigainnerComponent } from './Old-app-components/ligainner/ligainner.component';
import { ClipboardModule } from 'ngx-clipboard';
import { GiveawayComponent } from './Old-app-components/giveaway/giveaway.component';
import { SpinningwheelComponent } from './obsViews/spinningwheel/spinningwheel.component';
import { NgxWheelModule } from 'ngx-wheel';
import { BettingEditComponent } from './Old-app-components/betting-edit/betting-edit.component';
import { PacaniadaComponent } from './obsViews/pacaniada/pacaniada.component';
import { PacaniadaComponentE } from './Old-app-components/pacaniada/pacaniada.component';
import { ShopEditorComponent } from './shop-editor/shop-editor.component';
import { InscrisiLaGiveawayComponent } from './Old-app-components/inscrisi-la-giveaway/inscrisi-la-giveaway.component';
import { VoteNeedGreedComponent } from './vote-need-greed/vote-need-greed.component';
import { SpinGreedComponent } from './spin-greed/spin-greed.component';
import { BattleRoyaleComponent } from './Old-app-components/battle-royale/battle-royale.component';
import { BattleRoyaleEditComponent } from './Old-app-components/battle-royale-edit/battle-royale-edit.component';
import { BattleRoyaleClasamentComponent } from './obsViews/battle-royale-clasament/battle-royale-clasament.component';
import { VarianteComponent } from './obsViews/variante/variante.component';
import { ObsViewMainComponent } from './obs-view-main/obs-view-main.component';
import { NavBarObsViewsComponent } from './Navbars/nav-bar-obs-views/nav-bar-obs-views.component';
import { NavBarEditorComponent } from './Navbars/nav-bar-editor/nav-bar-editor.component';
import { GeneralSettingsComponent } from './NewEditorComponent/general-settings/general-settings.component';
import { LandingPageComponent } from './landing-page/landing-page.component';


@NgModule({
  declarations: [
    AppComponent,
    BonusHuntComponent,
    TournamentLivebattleComponent,
    TournamentLivebattleNextComponent,
    InPlayComponent,
    SumPipe,
    SafePipe,
    EmailAsteriskPipe,
    TheInnerBonushuntComponent,
    ViewWalletComponent,
    BettingComponent,
    HotwordsComponent,
    CustomThemeEditorComponent,
    LoginComponent,
    BonushuntEditorComponent,
    MainpageComponent,
    TournamentComponent,
    SetInplayComponent,
    EditWalletComponent,
    ConfigureObsComponent,
    UpdateLogComponent,
    LoialityComponent,
    TestbetsComponent,
    LoyaltyComponent,
    AlertwebsiteComponent,
    OfertacurentaComponent,
    LigaComponent,
    LigaobsComponent,
    LigainnerComponent,
    GiveawayComponent,
    SpinningwheelComponent,
    BettingEditComponent,
    PacaniadaComponent,
    PacaniadaComponentE,
    ShopEditorComponent,
    InscrisiLaGiveawayComponent,
    VoteNeedGreedComponent,
    SpinGreedComponent,
    BattleRoyaleComponent,
    BattleRoyaleEditComponent,
    BattleRoyaleClasamentComponent,
    VarianteComponent,
    ObsViewMainComponent,
    NavBarObsViewsComponent,
    NavBarEditorComponent,
    GeneralSettingsComponent,
    LandingPageComponent,
    ],
  imports: [
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
    NgxWheelModule
  ],
  providers: [IntervalRequestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
