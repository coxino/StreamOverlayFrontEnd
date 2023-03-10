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
  MemberLevelsMap:any[] = [
    {
      memberLevelString:"PERKNAME",
      memberLevelEnum:memberLevelEnum.Level1
    },
    {
      memberLevelString:"PERKNAME",
      memberLevelEnum:memberLevelEnum.Level2
    },
    {
      memberLevelString:"PERKNAME",
      memberLevelEnum:memberLevelEnum.Level3
    },
    {
      memberLevelString:"PERKNAME",
      memberLevelEnum:memberLevelEnum.Level4
    },
    {
      memberLevelString:"PERKNAME",
      memberLevelEnum:memberLevelEnum.Level5
    },
    {
      memberLevelString:"PERKNAME",
      memberLevelEnum:memberLevelEnum.Level6
    }
  ]
  streamerSettings:StreamerProfilePage = new StreamerProfilePage();
  
  constructor(gameholderService:GameHolderService, intervalRequest:IntervalRequestService,toastr:ToastrService) {
    super(gameholderService,intervalRequest,toastr);
    
    intervalRequest.getStreamerSettings().subscribe((data:any)=>{
      this.streamerSettings.Infos = data.streamerSettings;
      this.MemberLevelsMap = data.memberLevelsMap;
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
    this.SaveMemberLevelsMap();
  }
  
  ngOnInit(): void {
  }

  SaveMemberLevelsMap(){
    this.intervalRequest.saveMemberLevelsMap(this.MemberLevelsMap).subscribe((data:any)=>{
      this.toastr.success("Upated!");
    }); 
  }
  
}


export enum memberLevelEnum{
  Viewer = 0,
  Level1 = 1,
  Level2 = 2,
  Level3 = 3,
  Level4 = 4,
  Level5 = 5,
  Level6 = 6,
}