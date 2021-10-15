import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegistrationService } from '../registration.service';
import { User } from '../user';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  user = new User();
  constructor(private _service: RegistrationService, private _router: Router) { }

  ngOnInit(): void {
  }

  registerUser(){
    this._service.registerUserFromRemote(this.user).subscribe(
      data => {
        console.log("User registration Received")
        //this will be redirected to the main space
          this.user.email = data.email;
          this.user.user_id = data.userId;
          this.user.token = data.token;

          this._router.navigate(['/'])
      },
      error =>{
        console.log("User registration Rejected")
      }
      
    )
  }
}
