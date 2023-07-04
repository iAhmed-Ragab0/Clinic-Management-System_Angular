import { Component } from '@angular/core';
import { LoginServiceService } from '../../services/login-service.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-post-login',
  templateUrl: './post-login.component.html',
  styleUrls: ['./post-login.component.scss']
})
export class PostLoginComponent {
  hide: boolean = false;
  userForm!: FormGroup;
  token: any;
  decodedToken: any;
  idForAlert: number = 0;
  nameForAlert: string = "";
  helper = new JwtHelperService();

  constructor(private loginService: LoginServiceService,
    private fb: FormBuilder,
    private router: Router,
    private snackBar: MatSnackBar) {
    this.userForm = fb.group({
      email: ['', [Validators.required, Validators.pattern('^[A-Za-z0-9+_.-]+@(.+)$')]],
      password: ['', [Validators.required]]
    })
  }

  get email() {
    return this.userForm.get('email')
  }
  get password() {
    return this.userForm.get('password')
  }

  login() {
    this.loginService.authentication(this.userForm.value).subscribe((_token: any) => {

      //---put token in localstorage---//
      localStorage.setItem('TOKEN', _token.token);

      //---decode token to check role---//
      this.token = _token.token;
      this.decodedToken = this.helper.decodeToken(this.token);
      localStorage.setItem('role', this.decodedToken.role);
      // localStorage.setItem('FirstName', this.decodedToken.FirstName);


      //--find Name of User--//
      if (this.decodedToken.role != "admin") {
        this.loginService.findId(this.email?.value).subscribe((data: any) => {
          this.idForAlert = data[0].userId;
          this.loginService.findName(this.idForAlert, this.decodedToken.role).subscribe((data: any) => {
            this.nameForAlert = data.Data[0].firstName;
            this.alertModify(this.nameForAlert, "Profile");
          })
        })
      }



      //---(non-admin) paths---//
      if (this.decodedToken.id) {
        localStorage.setItem('id', this.decodedToken.id);

        switch (this.decodedToken.role) {
          case "doctor":
            this.router.navigateByUrl(`/doctor/${this.decodedToken.id}`);
            this.alertModify("Doctor","Control Profile");
            break;
          case "employee":
            this.router.navigateByUrl(`/employee/${this.decodedToken.id}`);
            this.alertModify("Our Epmloyee","Profile");
            break;
          case "patient":
            this.router.navigateByUrl(`/patient/${this.decodedToken.id}`);
            this.alertModify("Our Beloved Client","Profile");
            break;
          default:
            this.router.navigateByUrl(`/login`);
        }
      }

      //---admin path--//
      else {
        this.snackBar.open("Admin has no authorization here!", 'ok', {
          duration: 3000,
          verticalPosition: 'top',
        })
      }


    }, () => {
      this.snackBar.open("Wrong e-mail or Password", 'ok', {
        duration: 3000,
        verticalPosition: 'bottom',
      });
      console.clear();
    })
  }

  alertModify(name: string, distination: string) {
    this.snackBar.open(`Welcome ${name} to your ${distination}`, '', {
      duration: 3000,
      verticalPosition: 'top'
    });
  }

  signUpPage(){
    this.router.navigateByUrl("/register");
  }
}
