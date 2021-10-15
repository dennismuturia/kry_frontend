import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RegistrationService } from '../registration.service';
import { User } from '../user';
import { Router } from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
 
})
export class LoginComponent implements OnInit {
  user= new User();
 

  constructor(private _service: RegistrationService, private _router: Router) {
   }
  
  ngOnInit(): void {
  }
  loginUser(){
    this._service.loginUserFromRemote(this.user).subscribe(
      data => {
        console.log("Response received");
        if(data.token == null){
          console.log("Failure in login");
        }else{
          this.user.email = data.email;
          this.user.user_id = data.userId;
          this.user.token = data.token;


          this._router.navigate(['/services'])
        }
      },
      error =>console.log("Exception Occurred")
    );
  }

  getUser(){
    return this.user;
  }
}



