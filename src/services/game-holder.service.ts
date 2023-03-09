import { Injectable } from '@angular/core';
import { Observable, OperatorFunction } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';
import { LocalGame } from 'src/models/local-game';
import { IntervalRequestService } from './interval-request.service';

@Injectable({
  providedIn: 'root'
})
export class GameHolderService {
  private games:LocalGame[] = [];
  
  public getImage(name:string)
  {
    if(name == null || name==undefined)
    {
      return "/assets/img/image-not-found.png";
    }
    var toReturn = this.games.filter(v => v.Name.toLowerCase() === name.toLowerCase())[0]?.Image ?? "";
    if(toReturn == "")
    {
      toReturn = "/assets/img/image-not-found.png";
    }
    return  toReturn;
  }
  
  hasImage(name:string)
  {
    var toReturn = this.games.filter(v => v.Name.toLowerCase() === name.toLowerCase())[0]?.Image ?? "";
    if(toReturn == "")
    {
      return false;
    }
    return true;
  }

  public getGames()
  {
    return this.games;
  }
  
  constructor(private intervalRequest: IntervalRequestService) {
    this.intervalRequest.readLocaFile().subscribe((data:any)=>{
      this.games = data;
    });
  }

  public search: OperatorFunction<string, readonly string[]> = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      map(term => term.length < 2 ? []
        : this.games.map(x=>x.Name).filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10))
    )
}
