import { ToastrService } from "ngx-toastr";
import { Observable, OperatorFunction } from "rxjs";
import { debounceTime, distinctUntilChanged, map } from "rxjs/operators";
import { LocalGame } from "src/models/local-game";
import { GameHolderService } from "src/services/game-holder.service";
import { IntervalRequestService } from "src/services/interval-request.service";

export class EditorBase{
    public themeWrapper:any = document.querySelector('html');
    constructor(public gameHolder:GameHolderService, public intervalRequest: IntervalRequestService,public toastr: ToastrService){
         
    }
}