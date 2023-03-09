import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { EditorBase } from 'src/Factory/EditorBase';
import { RequestFromViewerForm, StreamerProfilePage } from 'src/models/ViewerLoginProfile';
import { GameHolderService } from 'src/services/game-holder.service';
import { IntervalRequestService } from 'src/services/interval-request.service';

@Component({
  selector: 'app-settings-page',
  templateUrl: './settings-page.component.html',
  styleUrls: ['./settings-page.component.scss']
})
export class SettingsPageComponent extends EditorBase implements OnInit {
  
  streamerSettings:StreamerProfilePage = new StreamerProfilePage();

  constructor(gameholderService:GameHolderService, intervalRequest:IntervalRequestService,toastr:ToastrService) {
    super(gameholderService,intervalRequest,toastr);

    intervalRequest.getStreamerSettings().subscribe((data:any)=>{
      this.streamerSettings.Infos = data.streamerSettings;
    });
  }

  addNew(){
    this.streamerSettings.Infos.shopSettings.push(new RequestFromViewerForm())
  }

  SaveSettings()
  {
    this.intervalRequest.setStreamerSettings(this.streamerSettings.Infos).subscribe((data:any)=>{
      this.toastr.success("Upated!");
    });
  }

  ngOnInit(): void {
  }

}
