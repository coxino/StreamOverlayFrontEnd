import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditorComponent } from './editor/editor.component';
import { NewInplayComponent } from './obs-views/new-inplay/new-inplay.component';
import { ObsviewerComponent } from './obsviewer/obsviewer.component';
import { AnimatedBorderComponent } from './obsViews/animated-border/animated-border.component';
import { BettingComponent } from './obsViews/betting/betting.component';
import { BonusHuntComponent } from './obsViews/bonus-hunt/bonus-hunt.component';
import { HotwordsComponent } from './obsViews/hotwords/hotwords.component';
import { TournamentLivebattleNextComponent } from './obsViews/tournament-livebattle-next/tournament-livebattle-next.component';
import { TournamentLivebattleComponent } from './obsViews/tournament-livebattle/tournament-livebattle.component';
import { VarianteComponent } from './obsViews/variante/variante.component';

export const obsRoutes: Routes = [
  { 
    path: 'obs', 
    component:ObsviewerComponent,
    children:[
      //OBS
      { path: 'animatedBorder', component: AnimatedBorderComponent },
      { path: 'betting', component: BettingComponent },
      { path: 'bonushunt', component: BonusHuntComponent },
      { path: 'inplay', component:NewInplayComponent },
      { path: 'tournamentscore', component: TournamentLivebattleComponent },
      { path: 'tournamentbracket', component: TournamentLivebattleNextComponent },
      { path: 'hotwords', component: HotwordsComponent },
      { path: 'variante', component: VarianteComponent },
    ]
  }];
  
  @NgModule({
    imports: [RouterModule.forChild(obsRoutes)],
    exports: [RouterModule]
  })
  
  export class ObsviewsRoutingModule { }
  