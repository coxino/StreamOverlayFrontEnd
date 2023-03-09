import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CasinosComponent } from './casinos/casinos.component';
import { GiveawaysComponent } from './giveaways/giveaways.component';
import { HistoryBonusHuntsComponent } from './history-bonus-hunts/history-bonus-hunts.component';
import { ShopPageComponent } from './shop-page/shop-page.component';
import { StreamerHomeComponent } from './streamer-home/streamer-home.component';
import { StreamerComponent } from './streamer.component';

const xroutes: Routes = [  
  { 
    path: 'streamer',  component:StreamerComponent, 
    children:[
      {path:':id', component:StreamerHomeComponent},
      {path:':id/history', component:HistoryBonusHuntsComponent},
      {path:':id/shop', component:ShopPageComponent},
      {path:':id/giveaways', component:GiveawaysComponent},
      {path:':id/casinos', component:CasinosComponent},
    ] 
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(xroutes)
  ],
  exports: [RouterModule]
})
export class StreamerRoutingModule { }
