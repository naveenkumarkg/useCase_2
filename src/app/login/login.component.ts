import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../api-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
loginTrue: boolean;
credentials: any;
userName;
password;
  constructor(public apiService: ApiServiceService, public route: Router) { }

  ngOnInit() {
    this.credentials = this.loginTrue = JSON.parse(sessionStorage.getItem("loginTrue"));

    if(this.loginTrue){
      
      sessionStorage.getItem('credentials')

    }
  }

  login(userName,password){
    if(userName != undefined && password != undefined){

      this.apiService.loginUser(userName,password).subscribe((data)=>{
       if(data["Status"] == "Success"){
          this.route.navigateByUrl('/dashboard')
       }else{
         alert("Login failed")
         this.userName ='';
         this.password ='';
       }
        
      })
    }
  
  }

}
