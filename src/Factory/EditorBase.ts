import { ToastrService } from "ngx-toastr";
import { GameHolderService } from "src/services/game-holder.service";
import { IntervalRequestService } from "src/services/interval-request.service";

export class EditorBase{
    public themeWrapper:any = document.querySelector('html');
    constructor(public gameHolder:GameHolderService, public intervalRequest: IntervalRequestService,public toastr: ToastrService){
         
    }
}