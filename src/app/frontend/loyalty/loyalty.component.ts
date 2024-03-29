import { Component, OnInit } from '@angular/core';
import { Observable, OperatorFunction } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';
import { MemberLevels, UserLoyal } from 'src/assets/database/Models/UserLoyal';
import { IntervalRequestService } from 'src/services/interval-request.service';

@Component({
  selector: 'app-loyalty',
  templateUrl: './loyalty.component.html',
  styleUrls: ['./loyalty.component.scss']
})

export class LoyaltyComponent implements OnInit {
  private themeWrapper:any = document.querySelector('html');
  ammountToAdd = 10;
  EditUser:UserLoyal = new UserLoyal();
  byId = false;
  UserToSearch = "";
  UserLoyals:UserLoyal[] = [];
  ShowIpAdress = false;

  memberLevels:any[] = [];
  
  constructor(private intervalRequest: IntervalRequestService) {
    this.themeWrapper.style.setProperty('--overflow',     "scroll");
    intervalRequest.apiGetLoyaltyList().subscribe((data:any)=>{       
      this.UserLoyals = data;
    });

    this.memberLevels.push({nume:"Viewer", memberLevel:MemberLevels.Viewer});
    this.memberLevels.push({nume:"Moderator", memberLevel:MemberLevels.Moderator});
    this.memberLevels.push({nume:"Coxumator", memberLevel:MemberLevels.Coxumator});
    this.memberLevels.push({nume:"Ajutor", memberLevel:MemberLevels.Ajutor});
    this.memberLevels.push({nume:"Gangster", memberLevel:MemberLevels.Gangster});
    this.memberLevels.push({nume:"Cop", memberLevel:MemberLevels.Cop});
    this.memberLevels.push({nume:"ElChapo", memberLevel:MemberLevels.ElChapo});
  }

  setLevel(sanse:any, rank:any)
  {
  this.EditUser.memberLevel =  this.memberLevels.filter(x=>x.nume == rank)[0].memberLevel;
  }

  addpointsall()
  {
    console.log("pts");
    
    this.intervalRequest.apiAddPointsAll(this.ammountToAdd).subscribe((data:any)=>{      
      this.intervalRequest.apiGetLoyaltyList().subscribe((xdata:any)=>{       
        this.UserLoyals = xdata;
      });

      console.log("users updated");
      
    });
  }
  
  searchUser()
  {
    if(this.byId == true)
    {
      this.EditUser = this.UserLoyals.map(x=>x).filter(v=> v.id == this.UserToSearch)[0];
    }
    else
    {
      this.EditUser = this.UserLoyals.map(x=>x).filter(v=> v.name == this.UserToSearch)[0];}
    }
    
    saveEdited()
    {
      this.intervalRequest.apiSaveloyalty(this.EditUser).subscribe((data:any)=>{
        
      });
    }
    
    toogleShowIpAdress()
    {
      this.ShowIpAdress = !this.ShowIpAdress;
    }

    toogleIsHunting(){
      this.byId = !this.byId;
    }
    
    searchbyid: OperatorFunction<string, readonly string[]> = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      map(term => term.length < 2 ? [] : this.UserLoyals.map((x)=>x.id).filter((v) => v!=null && v.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10)));
     
    search: OperatorFunction<string, readonly string[]> = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      map(term => term.length < 2 ? [] : this.UserLoyals.map((x)=>x.name).filter((v) => v!=null && v.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10)));
      
      
      ngOnInit(): void {
      }
      
    }
    