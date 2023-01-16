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
import { BonusHuntEndComponent } from './obsViews/bonus-hunt-end/bonus-hunt-end.component';
import { IntervalRequestService } from 'src/services/interval-request.service';
import { AnimatedBorderComponent } from './obsViews/animated-border/animated-border.component';
import { TheInnerBonushuntComponent } from './obsViews/the-inner-bonushunt/the-inner-bonushunt.component';
import { DepositWithdrawComponent } from './obsViews/deposit-withdraw/deposit-withdraw.component';
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
import { SetInplayComponent } from './frontend/set-inplay/set-inplay.component';
import { TranzactiiComponent } from './frontend/tranzactii/tranzactii.component';
import { ConfigureObsComponent } from './frontend/configure-obs/configure-obs.component';
import { BasicBackgroundComponent } from './Backgrounds/basic-background/basic-background.component';
import { CustomizedBackgroundComponent } from './Backgrounds/customized-background/customized-background.component';
import { BackgroundGradientComponent } from './Backgrounds/background-gradient/background-gradient.component';
import { UpdateLogComponent } from './version/update-log/update-log.component';
import { Bonushunt2Component } from './obsViews/bonushunt2/bonushunt2.component';
import { BettingbhComponent } from './obsViews/bettingbh/bettingbh.component';
import { LoialityComponent } from './obsViews/loiality/loiality.component';
import { TestbetsComponent } from './testing/testbets/testbets.component';
import { LoyaltyComponent } from './frontend/loyalty/loyalty.component';
import { EmailAsteriskPipe } from 'src/pipes/HashPipe';
import { AlertwebsiteComponent } from './obsViews/alertwebsite/alertwebsite.component';
import { OfertacurentaComponent } from './obsViews/ofertacurenta/ofertacurenta.component';
import { StocComponent } from './obsViews/stoc/stoc.component';
import { LigaComponent } from './ghinionistii/liga/liga.component';
import { LigaobsComponent } from './ghinionistii/ligaobs/ligaobs.component';
import { LigainnerComponent } from './ghinionistii/ligainner/ligainner.component';
import { ClipboardModule } from 'ngx-clipboard';
import { GiveawayComponent } from './frontend/giveaway/giveaway.component';
import { SpinningwheelComponent } from './obsViews/spinningwheel/spinningwheel.component';
import { NgxWheelModule } from 'ngx-wheel';
import { PaysafewheelComponent } from './paysafewheel/paysafewheel.component';
import { BettingEditComponent } from './frontend/betting-edit/betting-edit.component';
import { QuizShowComponent } from './obsViews/quiz-show/quiz-show.component';
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
    BonusHuntEndComponent,
    AnimatedBorderComponent,
    TheInnerBonushuntComponent,
    DepositWithdrawComponent,
    BettingComponent,
    HotwordsComponent,
    CustomThemeEditorComponent,
    LoginComponent,
    BonushuntEditorComponent,
    MainpageComponent,
    TournamentComponent,
    SetInplayComponent,
    TranzactiiComponent,
    ConfigureObsComponent,
    BasicBackgroundComponent,
    CustomizedBackgroundComponent,
    BackgroundGradientComponent,
    UpdateLogComponent,
    Bonushunt2Component,
    BettingbhComponent,
    LoialityComponent,
    TestbetsComponent,
    LoyaltyComponent,
    AlertwebsiteComponent,
    OfertacurentaComponent,
    StocComponent,
    LigaComponent,
    LigaobsComponent,
    LigainnerComponent,
    GiveawayComponent,
    SpinningwheelComponent,
    PaysafewheelComponent,
    BettingEditComponent,
    QuizShowComponent,
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
