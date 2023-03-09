import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditorHomePageComponent } from './editor/editor-home-page/editor-home-page.component';
import { EditorComponent } from './editor/editor.component';
import { BettingEditComponent } from './frontend/betting-edit/betting-edit.component';
import { BonushuntEditorComponent } from './frontend/bonushunt-editor/bonushunt-editor.component';
import { ConfigureObsComponent } from './frontend/configure-obs/configure-obs.component';
import { CustomThemeEditorComponent } from './frontend/custom-theme-editor/custom-theme-editor.component';
import { GiveawayComponent } from './frontend/giveaway/giveaway.component';
import { RoyaleRumbleEditComponent } from './frontend/royale-rumble-edit/royale-rumble-edit.component';
import { TournamentComponent } from './frontend/tournament/tournament.component';
import { TranzactiiComponent } from './frontend/tranzactii/tranzactii.component';
import { RedeemspageComponent } from './shop-editor/redeemspage/redeemspage.component';
import { SettingsPageComponent } from './shop-editor/settings-page/settings-page.component';
import { ShopEditorComponent } from './shop-editor/shop-editor.component';

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
      { path: 'general', component: TranzactiiComponent },  
      { path: 'shop', component:ShopEditorComponent },
      { path: 'redeems', component:RedeemspageComponent },
      { path: 'settings', component:SettingsPageComponent },
      { path: 'rumble', component:RoyaleRumbleEditComponent },
    ]
  }];
  
  @NgModule({
    imports: [RouterModule.forChild(editorRoutes)],
    exports: [RouterModule]
  })
  
  export class EditorRoutingModule { }
  