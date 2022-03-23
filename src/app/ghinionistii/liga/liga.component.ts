import { Component, OnInit } from '@angular/core';
import { Observable, OperatorFunction } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';
import { Settings } from 'src/assets/database/Models/databaseStructure';
import { LigaUser, Rank } from 'src/assets/database/Models/LigaUser';
import { UserLoyal } from 'src/assets/database/Models/UserLoyal';
import { LocalGame } from 'src/models/local-game';
import { IntervalRequestService } from 'src/services/interval-request.service';

@Component({
  selector: 'app-liga',
  templateUrl: './liga.component.html',
  styleUrls: ['./liga.component.scss']
})

//Editor
export class LigaComponent implements OnInit {
  private themeWrapper:any = document.querySelector('html');
  games:LocalGame[] = [];
  NewUser:LigaUser = new LigaUser();
  UsersResults:LigaUser[] = [];
  editUser:LigaUser = new LigaUser();
  searchName:string = "";
  rankList:Rank[] = [];
  
  constructor(private intervalRequest: IntervalRequestService) {
   
    this.rankList.push({nume:"1. Pui de Ghinionist 1 sansa", sanse:1});
    this.rankList.push({nume:"2. Ghinionist 2 sanse", sanse:2});
    this.rankList.push({nume:"3. Ghinionist puternic 3 sanse", sanse:3});
    this.rankList.push({nume:"4. Ghinionist cu bani multi 4 sanse", sanse:4});
    this.rankList.push({nume:"5. Ghinionistul SUPREM 5 sanse", sanse:5});

    this.themeWrapper.style.setProperty('--overflow',     "scroll");
    intervalRequest.apiGetRequest(Settings.LigaSpecialelor).subscribe((data:any)=>{
      this.UsersResults = data.users.reverse();
      console.log(JSON.stringify(this.UsersResults));      
    });
    this.intervalRequest.readLocaFile().subscribe((data:any)=>{
      this.games = data;
    });
  }
  
setusersanse(sanse:any, rank:any)
{
  this.NewUser.rank =  this.rankList.filter(x=>x.nume == rank)[0];
}

setcurusersanse(user:any,event:any,rank:any)
{
  this.UsersResults.find(x=>x == user).rank = this.rankList.filter(x=>x.nume == rank)[0];
  console.log(JSON.stringify(this.UsersResults.find(x=>x == user)));
  this.saveEdited(user);
  
}

  saveNewUser()
  {
    this.intervalRequest.apiAddLigaUser(this.NewUser).subscribe((data:any)=>{
      this.intervalRequest.apiGetRequest(Settings.LigaSpecialelor).subscribe((data:any)=>{
        this.UsersResults = data.users.reverse();
        console.log(JSON.stringify(this.UsersResults));
        
      });
    });
  }
  
  saveEdited(user:LigaUser)
  {
    this.intervalRequest.apiAddLigaUser(user).subscribe((data:any)=>{
      this.intervalRequest.apiGetRequest(Settings.LigaSpecialelor).subscribe((data:any)=>{
        this.UsersResults = data.users.reverse();
        console.log(JSON.stringify(this.UsersResults));
        
      });
    });
  }
  
  sterge(user:LigaUser)
  {
    this.intervalRequest.apiLigaSterge(user).subscribe((data:any) =>{
      this.intervalRequest.apiGetRequest(Settings.LigaSpecialelor).subscribe((data:any)=>{
        this.UsersResults = data.users.reverse();
        console.log(JSON.stringify(this.UsersResults));
        
      });
    })
    
  }
  
  // searchUser()
  // {
  //   this.editUser = this.UsersResults.map(x=>x).filter(v=> v.nume == this.searchName)[0];
  // }
  
  // searchSpeci: OperatorFunction<string, readonly string[]> = (text$: Observable<string>) =>
  // text$.pipe(
  //   debounceTime(200),
  //   distinctUntilChanged(),
  //   map(term => term.length < 2 ? []
  //     : this.games.map(x=>x.Name).filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10))
  // )
  
  // search: OperatorFunction<string, readonly string[]> = (text$: Observable<string>) =>
  //   text$.pipe(
  //     debounceTime(200),
  //     distinctUntilChanged(),
  //     map(term => term.length < 2 ? []
  //       : this.UsersResults.map(x=>x.nume).filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10)))
  
  ngOnInit(): void {
  }
  
}
