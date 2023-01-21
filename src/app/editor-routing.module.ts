import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditorHomePageComponent } from './editor/editor-home-page/editor-home-page.component';
import { EditorComponent } from './editor/editor.component';
import { BettingEditComponent } from './frontend/betting-edit/betting-edit.component';
import { BonushuntEditorComponent } from './frontend/bonushunt-editor/bonushunt-editor.component';
import { ConfigureObsComponent } from './frontend/configure-obs/configure-obs.component';
import { CustomThemeEditorComponent } from './frontend/custom-theme-editor/custom-theme-editor.component';
import { GiveawayComponent } from './frontend/giveaway/giveaway.component';
import { TournamentComponent } from './frontend/tournament/tournament.component';

export const editorRoutes: Routes = [
  { 
    path: 'editor', 
    component:EditorComponent,
    children:[
      {path: '', component:EditorHomePageComponent},
      //EDITORS TODO:REDESIGN
      { path: 'config',component:ConfigureObsComponent},
      { path: 'theme', component: CustomThemeEditorComponent },
      { path: 'bonushunt', component: BonushuntEditorComponent },
      { path: 'tournament', component: TournamentComponent },
      { path: 'givewayTimer', component: GiveawayComponent },
      { path: 'bettingedit', component: BettingEditComponent },
    ]
  }];
  
  @NgModule({
    imports: [RouterModule.forChild(editorRoutes)],
    exports: [RouterModule]
  })
  
  export class EditorRoutingModule { }
  