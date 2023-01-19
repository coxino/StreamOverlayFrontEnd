import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainpageComponent } from './Old-app-components/mainpage/mainpage.component';
import { BettingComponent } from './obsViews/betting/betting.component';
import { BonusHuntComponent } from './obsViews/bonus-hunt/bonus-hunt.component';
import { CustomThemeEditorComponent } from './Old-app-components/custom-theme-editor/custom-theme-editor.component';
import { HotwordsComponent } from './obsViews/hotwords/hotwords.component';
import { InPlayComponent } from './obsViews/in-play/in-play.component';
import { TheInnerBonushuntComponent } from './obsViews/the-inner-bonushunt/the-inner-bonushunt.component';
import { TournamentLivebattleNextComponent } from './obsViews/tournament-livebattle-next/tournament-livebattle-next.component';
import { TournamentLivebattleComponent } from './obsViews/tournament-livebattle/tournament-livebattle.component';
import { BonushuntEditorComponent } from './Old-app-components/bonushunt-editor/bonushunt-editor.component';
import { TournamentComponent } from './Old-app-components/tournament/tournament.component';
import { SetInplayComponent } from './Old-app-components/set-inplay/set-inplay.component';
import { EditWalletComponent } from './Old-app-components/Wallet/edit-wallet.component';
import { ViewWalletComponent } from './obsViews/WalletView/view-wallet.component';
import { ConfigureObsComponent } from './Old-app-components/configure-obs/configure-obs.component';
import { UpdateLogComponent } from './version/update-log/update-log.component';
import { TestbetsComponent } from './testing/testbets/testbets.component';
import { LoyaltyComponent } from './Old-app-components/loyalty/loyalty.component';
import { LigaComponent } from './Old-app-components/liga/liga.component';
import { LigaobsComponent } from './Old-app-components/ligaobs/ligaobs.component';
import { LigainnerComponent } from './Old-app-components/ligainner/ligainner.component';
import { GiveawayComponent } from './Old-app-components/giveaway/giveaway.component';
import { SpinningwheelComponent } from './obsViews/spinningwheel/spinningwheel.component';
import { BettingEditComponent } from './Old-app-components/betting-edit/betting-edit.component';
import { PacaniadaComponentE } from './Old-app-components/pacaniada/pacaniada.component';
import { PacaniadaComponent } from './obsViews/pacaniada/pacaniada.component';
import { ShopEditorComponent } from './shop-editor/shop-editor.component';
import { InscrisiLaGiveawayComponent } from './Old-app-components/inscrisi-la-giveaway/inscrisi-la-giveaway.component';
import { VoteNeedGreedComponent } from './vote-need-greed/vote-need-greed.component';
import { SpinGreedComponent } from './spin-greed/spin-greed.component';
import { BattleRoyaleComponent } from './Old-app-components/battle-royale/battle-royale.component';
import { BattleRoyaleEditComponent } from './Old-app-components/battle-royale-edit/battle-royale-edit.component';
import { BattleRoyaleClasamentComponent } from './obsViews/battle-royale-clasament/battle-royale-clasament.component';
import { VarianteComponent } from './obsViews/variante/variante.component';
import { GeneralSettingsComponent } from './NewEditorComponent/general-settings/general-settings.component';
import { LandingPageComponent } from './landing-page/landing-page.component';

const routes: Routes = [  
  {path:'', component:LandingPageComponent},
  //EDITOR
  { path: 'edit-home', component: MainpageComponent},  
  { path: 'edit-inplay', component: GeneralSettingsComponent },
  { path: 'edit-wallet', component: EditWalletComponent },  
  { path: 'edit-bonushunt', component: BonushuntEditorComponent },
  { path: 'edit-tournament', component: TournamentComponent },
  { path: 'edit-bettingoptions', component: BettingEditComponent },
  { path: 'edit-battleroyale', component: BattleRoyaleEditComponent },

  //OBS-VIEWS
  { path: 'view-bonushunt', component: BonusHuntComponent },
  { path: 'view-tournament-bracket', component: TournamentLivebattleNextComponent },  
  { path: 'view-wallet', component: ViewWalletComponent},  
  { path: 'view-betting', component: BettingComponent },
  { path: 'view-hotwords', component: HotwordsComponent },  
  { path: 'view-needgreed', component: VoteNeedGreedComponent },
  { path: 'view-spingreedwheel', component: SpinGreedComponent },  
  { path: 'view-inplay', component: InPlayComponent },
  { path: 'view-battleroyale', component: BattleRoyaleComponent },
  { path: 'view-battleroyale-clasament', component: BattleRoyaleClasamentComponent },
  { path: 'view-bet-variants', component: VarianteComponent },  
  { path: 'view-batantafinala', component: InscrisiLaGiveawayComponent },
  { path: 'view-points-wheel', component: SpinningwheelComponent },

  //deprecated
  { path: 'bf', component: TournamentLivebattleComponent },   
  
  //CONFIGURATIONS  
  { path: 'edit-theme', component: CustomThemeEditorComponent },

  //ligaSpecialelor
  { path: 'ligaspecialelor', component: LigaComponent },
  { path: 'ligaspecialelorobs', component: LigaobsComponent },
  { path: 'ligaspecialelorinner', component: LigainnerComponent },
  
  //API-CONFIG
  {path: 'API-shop-edit', component:ShopEditorComponent},
  {path: 'API-loyalty-edit', component: LoyaltyComponent },
  { path: 'API-giveaway-extract', component: GiveawayComponent },

  //TODO:DO SOMETHING GREATer
  { path: 'paca', component: PacaniadaComponent },
  { path: 'paca-edit', component: PacaniadaComponentE },
  
  //TODO: testing-to be refactored-since tests passed
  { path: 'test', component: TestbetsComponent },
  
  //no-category
  { path: 'version/log', component: UpdateLogComponent },  
  { path: 'obsconfig', component: ConfigureObsComponent },
  
  //aux-helpers
  { path: 'innerbh', component: TheInnerBonushuntComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
