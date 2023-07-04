import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { LoginServiceService } from './login-service.service';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {

  constructor(private injector:Injector) { }
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    let loginService = this.injector.get(LoginServiceService);
    let tokenizedRequest = req.clone({
      setHeaders:{
        Authorization: `Bearer ${loginService.getToken()}`
      }
    })
    return next.handle(tokenizedRequest);
  }
}
