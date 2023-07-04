import { DoctorComponent } from './doctor/doctor/doctor.component';
import { DoctorUpdateComponent } from './doctor/components/doctor-update/doctor-update.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './Login/auth.guard';
import { PostLoginComponent } from './Login/components/post-login/post-login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RegisterationComponent} from './register/components/register/register.component';
import { TestloginComponent } from './testlogin/testlogin.component';
import { EmployeeComponent } from './employee/employee.component';


const routes: Routes = [
  {path:"login", component: PostLoginComponent},
  {path:"register", component: RegisterationComponent},
  {path:"doctor/:id", canActivate:[AuthGuard], loadChildren: () =>
    import('./doctor/doctor.module').then((m) => m.DoctorModule)},
  {path:"employee/:id", component: EmployeeComponent, canActivate:[AuthGuard]},
  {path:"patient/:id" ,canActivate:[AuthGuard],loadChildren: () =>
    import('./patient/patient.module').then((m) => m.PatientModule)},
  {path:"", redirectTo:"/login", pathMatch: "full"},
  {path:"**", component:NotFoundComponent}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule, RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
