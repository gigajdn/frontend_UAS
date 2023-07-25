import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationComponent } from './login/registration/registration.component';
import { ProductInputComponent } from './product/input/product-input.component';
import { ProductListComponent } from './product/list/product-list.component';
import { LoginComponent } from './login/login/login.component';
import { UserComponent } from './dashboard/user/user.component';
import { AdminComponent } from './dashboard/admin/admin.component';
import { BuyComponent } from './product/buy/buy.component';


const routes: Routes = [   
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'admin/add',        component:ProductInputComponent},
  { path: 'admin/list',        component:ProductListComponent},
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegistrationComponent },
  { path: 'user/dashboard', component: UserComponent },
  { path: 'user/buy', component: BuyComponent },
  { path: 'admin/dashboard', component: AdminComponent },  

];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [

  ]
})
export class AppRoutingModule { }
