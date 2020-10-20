import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';

import { LoginComponentComponent } from './login-component/login-component.component';
import { AnniversaryComponent } from './anniversary/anniversary.component';
import { LoginComponent } from './login.component';
import { LogoutComponent } from './logout/logout.component';
const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'employees', component: EmployeeListComponent },
  { path: 'employees/add', component: CreateEmployeeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'update/:id', component: UpdateEmployeeComponent },
  { path: 'details/:id', component: EmployeeDetailsComponent },
  { path: 'employees/anniversary', component: AnniversaryComponent },
  { path: 'employees/logout', component: LogoutComponent },
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
