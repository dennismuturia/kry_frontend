import { EventEmitter, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { User } from './user';
import { UserInterface } from './user-interface';


@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  //user: LoggedInInterface;
  $isLoggedIn = new EventEmitter
  anotherUser: UserInterface = {
    user_id: 0,
    email: '',
    token: ''
    
  }
  constructor(private _http: HttpClient) {

   }

  public loginUserFromRemote(user:User):Observable<any>{
      this._http.post<any>("http://localhost:8093/api/login", user).subscribe(
        (        data: { token: string | null; email: string; userId: number; }) => {
          console.log("Response received");
          if(data.token == null){
            console.log("Failure in login");
          }else{
            this.anotherUser.user_id = data.userId;
            this.anotherUser.token = data.token;
            this.anotherUser.email = data.email;
            this.$isLoggedIn.emit(this.anotherUser);
            console.log(data)
          }
        },
        error =>console.log("Exception Occurred")
      );
      
      return this._http.post<any>("http://localhost:8093/api/login", user)
  }

  public registerUserFromRemote(user:User):Observable<any>{
    return this._http.post<any>("http://localhost:8093/api/register", user)
  }
}
