import { Observable, OperatorFunction } from "rxjs";
import { debounceTime, distinctUntilChanged, map } from "rxjs/operators";
import { LocalGame } from "src/models/local-game";
import { GameHolderService } from "src/services/game-holder.service";

export class EditorBase{
    constructor(gameHolder:GameHolderService){
        
    }
    //[ngbTypeahead]="search"
}