import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostLoginComponent } from './components/post-login/post-login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
//material ui
import {MatCardModule} from '@angular/material/card'
import {MatButtonModule} from '@angular/material/button'
import {MatInputModule} from '@angular/material/input'
import {MatIconModule} from '@angular/material/icon'
import {MatSnackBarModule} from '@angular/material/snack-bar'

@NgModule({
  declarations: [
    PostLoginComponent
  ],
  imports: [
    CommonModule,
    FormsModule, 
    ReactiveFormsModule, 
    MatCardModule, 
    MatButtonModule, 
    MatInputModule, 
    MatIconModule,
    MatSnackBarModule
  ],
  exports:[
    PostLoginComponent
  ]
})
export class LoginModule { }
