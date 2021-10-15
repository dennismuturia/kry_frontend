import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { RegistrationService } from './registration.service';
import { User } from './user';
import { UserInterface } from './user-interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ CookieService ]
})
export class AppComponent {
  title = 'poller';
  isUserLogged = false
  user: User = new User;

  constructor(private router: Router, private _login: RegistrationService, private cookieService: CookieService){ }
  ngOnInit(): void {
    this._login.$isLoggedIn.subscribe(
      data => {
        this.isUserLogged = true;
        this.user = data
        this.cookieService.set('user_id', data.user_id)
        this.cookieService.set('email', data.email)
        this.cookieService.set('token', data.token)
        this.cookieService.set('islogged', "true")
      }
    )

    const isLogged: string = this.cookieService.get('islogged');
    if(isLogged === "true"){
      this.isUserLogged = true;
    }else{
      this.isUserLogged = false;
    }
  
  }

  goToLogin($myParam: string = ''): void {
    const navigationDetails: string[] = ['/login'];
    if($myParam.length) {
      navigationDetails.push($myParam);
    }
    this.router.navigate(navigationDetails);
  }
  goToRegister(): void {
  this.router.navigate(['/registration']);
  }

  fetchservices(): void{
    this.router.navigate(['/services']);
  }
}
