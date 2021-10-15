import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';

import { RegistrationComponent } from './registration/registration.component';
import { ServicesComponent } from './services/services.component';
import { UpdateServiceComponent } from './update-service/update-service.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
 // {path:'',component:AppComponent},
  {path:'registration', component:RegistrationComponent},
  {path:'services', component: ServicesComponent},
  {path:'update', component: UpdateServiceComponent}
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
