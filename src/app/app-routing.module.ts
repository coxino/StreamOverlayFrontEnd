import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainpageComponent } from './mainpage/mainpage.component';
import { AnimatedBorderComponent } from './obsViews/animated-border/animated-border.component';
import { BettingComponent } from './obsViews/betting/betting.component';
import { BonusHuntEndComponent } from './obsViews/bonus-hunt-end/bonus-hunt-end.component';
import { BonusHuntComponent } from './obsViews/bonus-hunt/bonus-hunt.component';
import { CustomThemeEditorComponent } from './frontend/custom-theme-editor/custom-theme-editor.component';
import { HotwordsComponent } from './obsViews/hotwords/hotwords.component';
import { InPlayComponent } from './obsViews/in-play/in-play.component';
import { TheInnerBonushuntComponent } from './obsViews/the-inner-bonushunt/the-inner-bonushunt.component';
import { TournamentLivebattleNextComponent } from './obsViews/tournament-livebattle-next/tournament-livebattle-next.component';
import { TournamentLivebattleComponent } from './obsViews/tournament-livebattle/tournament-livebattle.component';
import { BonushuntEditorComponent } from './frontend/bonushunt-editor/bonushunt-editor.component';
import { TournamentComponent } from './frontend/tournament/tournament.component';
import { SetInplayComponent } from './frontend/set-inplay/set-inplay.component';
import { TranzactiiComponent } from './frontend/tranzactii/tranzactii.component';
import { DepositWithdrawComponent } from './obsViews/deposit-withdraw/deposit-withdraw.component';
import { ConfigureObsComponent } from './frontend/configure-obs/configure-obs.component';
import { BasicBackgroundComponent } from './Backgrounds/basic-background/basic-background.component';
import { BackgroundGradientComponent } from './Backgrounds/background-gradient/background-gradient.component';
import { UpdateLogComponent } from './version/update-log/update-log.component';
import { CustomizedBackgroundComponent } from './Backgrounds/customized-background/customized-background.component';
import { Bonushunt2Component } from './obsViews/bonushunt2/bonushunt2.component';
import { BettingbhComponent } from './obsViews/bettingbh/bettingbh.component';
import { TestbetsComponent } from './testing/testbets/testbets.component';
import { LoyaltyComponent } from './frontend/loyalty/loyalty.component';
import { StocComponent } from './obsViews/stoc/stoc.component';
import { LigaComponent } from './ghinionistii/liga/liga.component';
import { LigaobsComponent } from './ghinionistii/ligaobs/ligaobs.component';
import { LigainnerComponent } from './ghinionistii/ligainner/ligainner.component';
import { GiveawayComponent } from './frontend/giveaway/giveaway.component';
import { SpinningwheelComponent } from './obsViews/spinningwheel/spinningwheel.component';
import { PaysafewheelComponent } from './paysafewheel/paysafewheel.component';
import { BettingEditComponent } from './frontend/betting-edit/betting-edit.component';
import { QuizShowComponent } from './obsViews/quiz-show/quiz-show.component';
import { PacaniadaComponentE } from './frontend/pacaniada/pacaniada.component';
import { PacaniadaComponent } from './obsViews/pacaniada/pacaniada.component';
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

const routes: Routes = [  
  { path:"landing", component:LangingPageComponent },
  { path: '', component: MainpageComponent },
  { path: 'ab', component: AnimatedBorderComponent },
  { path: 'bh', component: BonusHuntComponent },
  { path: 'bf', component: TournamentLivebattleComponent },
  { path: 'bfnext', component: TournamentLivebattleNextComponent },
  { path: 'in-play', component: InPlayComponent },  
  { path: 'end-bonus-hunt', component: BonusHuntEndComponent },  
  { path: 'innerbh', component: TheInnerBonushuntComponent },  
  { path: 'border', component: AnimatedBorderComponent },  
  { path: 'tranzactiiedit', component: TranzactiiComponent },
  { path: 'tranzactii', component: DepositWithdrawComponent },
  { path: 'betting', component: BettingComponent },
  { path: 'bettingbh', component: BettingbhComponent },
  { path: 'hotwords', component: HotwordsComponent },
  { path: 'setInplay', component: SetInplayComponent },
  { path: 'obsconfig', component: ConfigureObsComponent },
  { path: 'bh2', component: Bonushunt2Component },
  { path: 'loyaltyfe', component: LoyaltyComponent },
  { path: 'stoc', component: StocComponent },
  { path: 'ligaspecialelor', component: LigaComponent },
  { path: 'ligaspecialelorobs', component: LigaobsComponent },
  { path: 'ligaspecialelorinner', component: LigainnerComponent },
  { path: 'quizz', component: QuizShowComponent },
  
  {path: 'shopedit', component:ShopEditorComponent},
  
  
  { path: 'paca', component: PacaniadaComponent },
  { path: 'paca-edit', component: PacaniadaComponentE },
  
  //BackGrounds
  { path: 'backgrounds/basic', component: BasicBackgroundComponent },
  { path: 'backgrounds/gradient', component: BackgroundGradientComponent },
  { path: 'backgrounds/custom', component: CustomizedBackgroundComponent },
  
  //testing
  { path: 'test', component: TestbetsComponent },
  { path: 'wheel', component: SpinningwheelComponent },
  { path: 'lmawheel', component: RoataAniversaraComponent },
  { path: 'psfwheel', component: PaysafewheelComponent },
  
  //version log
  { path: 'version/log', component: UpdateLogComponent },
  //Frontend
  { path: 'customTheme', component: CustomThemeEditorComponent },
  { path: 'bonusHuntEdit', component: BonushuntEditorComponent },
  { path: 'tournamentEdit', component: TournamentComponent },
  { path: 'givewayTimer', component: GiveawayComponent },
  { path: 'bettingedit', component: BettingEditComponent },
  
  
  { path: 'aniversare', component: InscrisiLaGiveawayComponent },
  { path: 'needgreed', component: VoteNeedGreedComponent },
  { path: 'greed', component: SpinGreedComponent },
  
  
  { path: 'variant', component: VarianteComponent },
  
  
  { path: 'br', component: BattleRoyaleComponent },
  { path: 'bredit', component: BattleRoyaleEditComponent },
  { path: 'brclasament', component: BattleRoyaleClasamentComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
