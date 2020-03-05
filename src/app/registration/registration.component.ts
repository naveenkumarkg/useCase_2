import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from './../api-service.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  email: string
  password: string;
  firstName: string;
  lastName: string;
  constructor(public apiService: ApiServiceService, public route: Router) { }

  ngOnInit() {
  }

  registerUser()  {
    let login = true;
    if ((this.password != '' && this.email !== '' && this.firstName !== '' && this.lastName !== '') &&
      (this.password != undefined && this.email !== undefined && this.firstName !== undefined && this.lastName !== undefined)) {
      
        let requestBody = { username: this.email, password: this.password };
      this.apiService.registeruser(requestBody).subscribe((data: any[]) => {
       if(data){
         this.route.navigateByUrl('/');

         sessionStorage.setItem('loginTrue', JSON.stringify(login));
         sessionStorage.setItem('credentials',JSON.stringify(requestBody))
       }
    });


    }
  }

}
