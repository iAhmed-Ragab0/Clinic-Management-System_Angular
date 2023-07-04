import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterService } from '../../services/register.service';
import { passConfirm } from '../../_customValidations/confirmPassword';
import { forbiddenNames } from '../../_customValidations/forbiddenNames';
import { alphaNames } from '../../_customValidations/alphaNames'
import { onlyDigits } from '../../_customValidations/onlyDigits';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-registeration',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterationComponent {

  get SSN() {
    return this.userRegisterForm.get('SSN');
  }
  get firstName() {
    return this.userRegisterForm.get('firstName');
  }
  get lastName() {
    return this.userRegisterForm.get('lastName');
  }
  get email() {
    return this.userRegisterForm.get('email');
  }
  get password() {
    return this.userRegisterForm.get('password');
  }
  get confirmPassword() {
    return this.userRegisterForm.get('confirmPassword');
  }
  get phone() {
    return this.userRegisterForm.get('phone');
  }
  get age() {
    return this.userRegisterForm.get('age');
  }
  get city() {
    return this.userRegisterForm.get('address')?.get('city');
  }
  get street() {
    return this.userRegisterForm.get('address')?.get('street');
  }
  get building() {
    return this.userRegisterForm.get('address')?.get('building');
  }

  constructor(public fb: FormBuilder,
    public regService: RegisterService,
    public router: Router,
    public snackBar: MatSnackBar) { }

  userRegisterForm!: FormGroup;
  ngOnInit() {
    this.userRegisterForm = this.fb.group({
      SSN: ['', [Validators.required, Validators.minLength(14), Validators.maxLength(14), onlyDigits]],
      firstName: ['', [Validators.required, forbiddenNames, Validators.maxLength(50), alphaNames]],
      lastName: ['', [Validators.required,, forbiddenNames, Validators.maxLength(50), alphaNames]],
      age: ['', [Validators.required]],
      email: ['',[Validators.required, Validators.pattern(/^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z]+)$/)]],
      password: ['', [Validators.required]],
      confirmPassword: ['', [Validators.required]],
      address: this.fb.group({
        city: ['', Validators.required],
        street: ['', Validators.required],
        building: ['', Validators.required],
      }),
      phone: ['', [Validators.required, , Validators.pattern('^01[0-2,5]{1}[0-9]{8}$')]],
    }, { validators: passConfirm });
    console.clear();
  }
  register() {
    this.regService.register(this.userRegisterForm.value).subscribe(data => {
      this.snackBar.open("Congratulations, You have been registered Successfully!", 'ok', {
        duration: 3000,
        verticalPosition: 'top',
      });
    },err=>{
      this.snackBar.open("The e-mail already exists, try to login!", 'ok', {
        duration: 3000,
        verticalPosition: 'top',
      });
    })
    this.router.navigateByUrl("/login");
  }

  loginPage(){
    this.router.navigateByUrl("/login");
  }
}