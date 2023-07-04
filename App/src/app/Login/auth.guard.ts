import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginServiceService } from './services/login-service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: LoginServiceService, private router: Router) { }
  canActivate(
    route: ActivatedRouteSnapshot
  ): boolean {
    if (this.authService.loggedIn()) {
      if (route.url.length > 0) {
        let menu = route.url[0].path;
        if ((menu == 'doctors' || menu == 'patients' || menu == 'employees' || menu == 'dashboard'|| menu == 'medicine') && (this.authService.getRole() == "admin")) {
          return true;
        } else if ((menu == 'doctor') && (this.authService.getRole() == "doctor")) {
          return true;
        }
        else if ((menu == 'patient') && (this.authService.getRole() == "patient")) {
          return true;
        } else if ((menu == 'employee') && (this.authService.getRole() == "employee")) {
          return true;
        }
        else {
          this.router.navigate(['']);
          alert("you dont have access");
          return false;
        }
      } else {
        return true
      }
    }
    else {
      this.router.navigateByUrl('/login')
      return false
    }
  }

}
