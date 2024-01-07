import { HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthenticationService } from '../authentication.service';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorBasicAuthService implements HttpInterceptor {

  constructor(
    private authService: AuthenticationService
  ) { }

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    // let username = "AlexKushyn";
    // let password = "password";
    // let basicAuthHeaderString = "Basic " + window.btoa(username + ":" + password)
    let basicAuthHeaderString = this.authService.getAuthenticatedToken();
    let username = this.authService.getAuthenticatedUser();

    if (basicAuthHeaderString && username) {
      req = req.clone({
        setHeaders: {
          Authorization: basicAuthHeaderString
        }
      })
    }
    return next.handle(req);
  }

}
