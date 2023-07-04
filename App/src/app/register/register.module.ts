import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { RegisterationComponent } from './components/register/register.component';



@NgModule({
  declarations: [
    RegisterationComponent
  ],
  imports: [
    CommonModule, FormsModule, ReactiveFormsModule
  ],
  exports: [
    RegisterationComponent
  ]
})
export class RegisterModule { }
