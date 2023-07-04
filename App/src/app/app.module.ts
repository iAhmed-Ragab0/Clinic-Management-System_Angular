import { DoctorModule } from './doctor/doctor.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginModule } from './Login/login.module';
import { TestloginComponent } from './testlogin/testlogin.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RegisterModule } from './register/register.module';
import { InterceptorService } from './Login/services/interceptor.service';
import { NotFoundComponent } from './not-found/not-found.component';
import { FormsModule } from '@angular/forms';
import { CoreModule } from './Core/core.module';
import { PatientModule } from './patient/patient.module';
import { EmployeeModule } from './employee/employee.module';
import { ProfileModule } from './profile/profile.module';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    TestloginComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LoginModule,
    HttpClientModule,
    RegisterModule,
    CoreModule,
    DoctorModule,
    PatientModule,
    EmployeeModule,
    ProfileModule,
    ReactiveFormsModule,
 

  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: InterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
