import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ServiceClass } from './service-class';
import { Observable } from 'rxjs';
import { UserInterface } from './user-interface';



@Injectable({
  providedIn: 'root'
})
export class ServiceserviceService {

  
  constructor(private _http: HttpClient) { }
  public fetchAllServices(serviceClass: ServiceClass, user: UserInterface):Observable<any>{
    return this._http.get<any>("http://localhost:8093/api/"+user.user_id+"/services/" + user.token);
  }

  public updateData( service:ServiceClass, user: UserInterface):Observable<any>{
    return this._http.post<any>("http://localhost:8093/api/" + user.user_id+"/updateservice/"+user.token , service);
  }

  public deleteData(service:ServiceClass, user: UserInterface):Observable<any>{
    return this._http.post<any>("http://localhost:8093/api/"+user.user_id+"/deleteService/"+user.token , service);
  }

  public createService(service: ServiceClass, user: UserInterface):Observable<any>{
    return this._http.post<any>("http://localhost:8093/api/"+user.user_id+"/createservice/"+ user.token, service);
  }
}
