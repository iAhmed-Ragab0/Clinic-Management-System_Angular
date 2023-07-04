import { Injectable, Injector } from '@angular/core';
import { HttpRequest, HttpHandler, HttpInterceptor } from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {

  constructor() { }
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    let tokenizedRequest = req.clone({
      setHeaders:{
        Authorization: `Bearer ${this.getToken()}`
      }
    })
    return next.handle(tokenizedRequest);
  }
  getToken(){
    return localStorage.getItem('TOKEN');
  }
}
