import { HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorBasicAuthService implements HttpInterceptor {

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler){
    let username = "AlexKushyn";
    let password = "password";
    let basicAuthHeaderString = "Basic " + window.btoa(username + ":" + password)
    
    req = req.clone({
      setHeaders: {
        Authorization : basicAuthHeaderString
      }
    })
    console.log(req)
    return next.handle(req);
  }

}
