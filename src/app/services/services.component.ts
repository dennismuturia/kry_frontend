import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { RegistrationService } from '../registration.service';
import { ServiceClass } from '../service-class';
import { ServiceserviceService } from '../serviceservice.service';
import { User } from '../user';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { UserInterface } from '../user-interface';



@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css'],
})
export class ServicesComponent implements OnInit {
  services: ServiceClass[]
  //user: UserInterface
  user: User = new User;

  


  servicesToUpdate = {
    serviceName : "",
    url: "",
    serviceId: null,
    active: ""
  }
 

  constructor(private _service: ServiceserviceService,private _login: RegistrationService, private router: Router, private cookieService: CookieService) {
    this.services = []
    
 
  }


  updateService(specService: ServiceClass){
      this.servicesToUpdate = specService;
  }
  refresh(): void {
    this.router.navigate(['/services']);
}

  createnewserviceform(){
      this._service.createService(this.servicesToUpdate, this._login.anotherUser).subscribe(
        data => {
          console.log("Success in creating a new service")
         this.refresh()
        },error => console.error("error in creating a service")
      )
  }
  updateServiceWithForm(){
    this._service.updateData(this.servicesToUpdate, this._login.anotherUser).subscribe(
      data => {
        this.refresh()
      },
      error => console.log("error occured")
      
    )
  }
  deleteService(specService: ServiceClass){
    this._service.deleteData(specService, this._login.anotherUser).subscribe(
      data => {
        console.log(data);
        this.refresh()
      },
      error => console.error("error ocurred")
      
    )
  }
  ngOnInit(): void {
    if(this._login.anotherUser.user_id == 0){
      
      this.router.navigate(['/login']);
    }
    

    this._login.$isLoggedIn.subscribe(data => {
      this.user.email = data.email;
      this.user.token = data.token;
      this.user.user_id = data.user_id;
 
      
    })
    this.fetchServices(this._login.anotherUser);
    
    const cookieExists: boolean = this.cookieService.check('test');
    const id: string = this.cookieService.get('user_id');
    const email: string = this.cookieService.get('email');
    const token: string = this.cookieService.get('token');

  
  }
  fetchServices(aUser: UserInterface){

    // @ts-ignore
    this._service.fetchAllServices(this.services, aUser).subscribe(
      data =>{
        this.services = data;
        console.log("Able to reach the server");
        console.log(this.services);
      },
      error =>{
        console.log("An error occurred");
        console.log(aUser);
      }
    )
  }

}




