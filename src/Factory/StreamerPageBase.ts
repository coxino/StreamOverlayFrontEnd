import { ActivatedRoute } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { UserdataService } from "src/app/streamer/userdata.service";
import { StreamerpagerequestsService } from "src/services/streamerpagerequests.service";

export class StreamerPageBase
{   

    constructor(public requestService:StreamerpagerequestsService,
        public routeService:ActivatedRoute,
        public toastrService:ToastrService,
        public userdataService:UserdataService){
        
        this.routeService.params.subscribe(params => this.userdataService.ViewerLoginProfile.StreamerID = params.id);
    }
}