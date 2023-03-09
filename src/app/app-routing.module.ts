import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimatedBorderComponent } from './obsViews/animated-border/animated-border.component';
import { TheInnerBonushuntComponent } from './obsViews/the-inner-bonushunt/the-inner-bonushunt.component';
import { BasicBackgroundComponent } from './Backgrounds/basic-background/basic-background.component';
import { UpdateLogComponent } from './version/update-log/update-log.component';
import { TestbetsComponent } from './testing/testbets/testbets.component';
import { LoyaltyComponent } from './frontend/loyalty/loyalty.component';
import { LigaComponent } from './ghinionistii/liga/liga.component';
import { LigaobsComponent } from './ghinionistii/ligaobs/ligaobs.component';
import { LigainnerComponent } from './ghinionistii/ligainner/ligainner.component';
import { SpinningwheelComponent } from './obsViews/spinningwheel/spinningwheel.component';
import { PaysafewheelComponent } from './paysafewheel/paysafewheel.component';
import { PacaniadaComponentE } from './frontend/pacaniada/pacaniada.component';
import { PacaniadaComponent } from './obsViews/pacaniada/pacaniada.component';
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
import { StreamerComponent } from './streamer/streamer.component';
import { StreamerRoutingModule } from './streamer/streamer-routing.module';

const routes: Routes = [  

  {path:'streamer', component:StreamerComponent},
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
    ObsviewsRoutingModule,
    StreamerRoutingModule   
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
