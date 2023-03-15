import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StreamerRoutingModule } from './streamer-routing.module';
import { HistoryBonusHuntsComponent } from './history-bonus-hunts/history-bonus-hunts.component';
import { StreamerHomeComponent } from './streamer-home/streamer-home.component';
import { StreamerComponent } from './streamer.component';
import { BrowserModule } from '@angular/platform-browser';
import { StreamerpagerequestsService } from 'src/services/streamerpagerequests.service';
import { ShopPageComponent } from './shop-page/shop-page.component';
import { TwitchLoginSdkModule } from "twitch-login-sdk";
import { UserdataService } from './userdata.service';
import { GiveawaysComponent } from './giveaways/giveaways.component';
import { CasinosComponent } from './casinos/casinos.component';
import { FormsModule } from '@angular/forms';
import { LinkifyPipe, LinkifyTitlePipe } from '../commonpipes/linkify.pipe';
import { UserInventoryComponent } from './user-inventory/user-inventory.component';

@NgModule({
  declarations: [
    ShopPageComponent,
    StreamerHomeComponent,
    HistoryBonusHuntsComponent,
    StreamerComponent,
    GiveawaysComponent,
    CasinosComponent,
    LinkifyPipe,
    LinkifyTitlePipe,
    UserInventoryComponent
  ],
  imports: [
    CommonModule,
    StreamerRoutingModule, 
    BrowserModule,
    FormsModule,
    TwitchLoginSdkModule.forRoot({ 
      twitchId:  "nhtoulxff6s02iv9kw9ztfmmciqz2r", //<******* YOUR TWITCH_ID 👈      
      redirect:  "https://coxino.ro/streamer" //<***** YOUR CALLBACK REDIRECT 👈redirect_uri
  })
  ],
  providers: [StreamerpagerequestsService, UserdataService],
  bootstrap: [StreamerModule]
})
export class StreamerModule { }
