import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimatedBorderComponent } from './obsViews/animated-border/animated-border.component';
import { CustomThemeEditorComponent } from './frontend/custom-theme-editor/custom-theme-editor.component';
import { TheInnerBonushuntComponent } from './obsViews/the-inner-bonushunt/the-inner-bonushunt.component';
import { BonushuntEditorComponent } from './frontend/bonushunt-editor/bonushunt-editor.component';
import { TournamentComponent } from './frontend/tournament/tournament.component';
import { BasicBackgroundComponent } from './Backgrounds/basic-background/basic-background.component';
import { UpdateLogComponent } from './version/update-log/update-log.component';
import { TestbetsComponent } from './testing/testbets/testbets.component';
import { LoyaltyComponent } from './frontend/loyalty/loyalty.component';
import { LigaComponent } from './ghinionistii/liga/liga.component';
import { LigaobsComponent } from './ghinionistii/ligaobs/ligaobs.component';
import { LigainnerComponent } from './ghinionistii/ligainner/ligainner.component';
import { GiveawayComponent } from './frontend/giveaway/giveaway.component';
import { SpinningwheelComponent } from './obsViews/spinningwheel/spinningwheel.component';
import { PaysafewheelComponent } from './paysafewheel/paysafewheel.component';
import { BettingEditComponent } from './frontend/betting-edit/betting-edit.component';
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
import { LangingPageComponent } from './langing-page/langing-page.component';
import { EditorRoutingModule } from './editor-routing.module';
import { ObsviewsRoutingModule } from './obsviews-routing.module';

const routes: Routes = [  
  //HomePages - LandingPages 
  { path:'', component:LangingPageComponent }, 
    //HELPERS  
  { path: 'innerbh', component: TheInnerBonushuntComponent },
  { path: 'border', component: AnimatedBorderComponent }, 
  
  //BELOE = refactor left     
  
  
  { path: 'loyaltyfe', component: LoyaltyComponent },
  
  { path: 'ligaspecialelor', component: LigaComponent },
  { path: 'ligaspecialelorobs', component: LigaobsComponent },
  { path: 'ligaspecialelorinner', component: LigainnerComponent },
  
  {path: 'shopedit', component:ShopEditorComponent},
  
  
  { path: 'paca', component: PacaniadaComponent },
  { path: 'paca-edit', component: PacaniadaComponentE },
  
  //BackGrounds
  { path: 'backgrounds/basic', component: BasicBackgroundComponent },
  
  //testing
  { path: 'test', component: TestbetsComponent },
  { path: 'wheel', component: SpinningwheelComponent },
  { path: 'lmawheel', component: RoataAniversaraComponent },
  { path: 'psfwheel', component: PaysafewheelComponent },
  
  //version log
  { path: 'version/log', component: UpdateLogComponent },
  
  
  
  { path: 'aniversare', component: InscrisiLaGiveawayComponent },
  { path: 'needgreed', component: VoteNeedGreedComponent },
  { path: 'greed', component: SpinGreedComponent },
  
  
  
  { path: 'br', component: BattleRoyaleComponent },
  { path: 'bredit', component: BattleRoyaleEditComponent },
  { path: 'brclasament', component: BattleRoyaleClasamentComponent },
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    EditorRoutingModule,
    ObsviewsRoutingModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
