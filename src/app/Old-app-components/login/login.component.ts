import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie';
import { IntervalRequestService } from 'src/services/interval-request.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  username:string = "";
  password:string = "";
  email:string = "";
  alertText = "Email must be in email format email@domain.host";
  isLogedIn = false;
  emailFail = false;
  IsRegister = false;
  constructor(private intervalRequest: IntervalRequestService,private cookieService: CookieService) {
    
    
  }
  
  ngOnInit(): void {
    this.isLogedIn = this.cookieService.get('token') != null;
  }
  
  doAction()
  {
    if(this.IsRegister == false)
    {
      this.login();
    }
    else{
      this.register();
    }
  }
  
  register()
  {
    if(this.validateEmail(this.email))
    {
      this.intervalRequest.apiRegisterUser(this.username, this.password,this.email).subscribe(data=>{
        this.cookieService.put('token',data.token);
        this.cookieService.put('username',this.username);      
        this.isLogedIn = true;
        location.reload();
      },(err)=>{                
        this.alertText = err.error; this.emailFail = true;
      })
    }
    else
    {
      this.alertText = "Email must be in email format email@domain.hst";
      this.emailFail = true;
    }
  }
  validateEmail (emailAdress:string)
  {
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (emailAdress.match(regexEmail)) {
      return true; 
    } else {
      return false; 
    }
  }
  
  login()
  {    
    this.intervalRequest.apiLoginUser(this.username, this.password).subscribe(data=>{
      console.log(data);
      this.cookieService.put('token',data.token);
      this.cookieService.put('username',this.username);
      this.isLogedIn = true;
      location.reload();
    })
  }
  
}
