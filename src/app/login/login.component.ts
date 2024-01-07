import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';
import { AuthenticationService } from '../service/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  username = "AlexKushyn"
  password = ""
  errorMessage = "Invalid Credentials"
  invalidLogin = false

  constructor(
    private router: Router,
    private hardcodedAuthenticationService: HardcodedAuthenticationService,
    private authService: AuthenticationService
  ) { }
  ngOnInit(): void {

  }
  handleLogin() {
    if (this.hardcodedAuthenticationService.authenticate(this.username, this.password)) {
      this.router.navigate(["welcome", this.username])
      this.invalidLogin = false
    }
    else {
      this.invalidLogin = true
    }
  }

  handleBasicAuthLogin() {
    this.authService.executeBasicAuthService(this.username, this.password).subscribe(
      data => {
        console.log(data)
        this.router.navigate(["welcome", this.username])
        this.invalidLogin = false
      },
      error => {
        console.log(error)
        this.invalidLogin = true
      }
    )
  }

  handleJWTAuthLogin() {
    this.authService.executeJWTAuthService(this.username, this.password).subscribe(
      data => {
        console.log(data)
        this.router.navigate(["welcome", this.username])
        this.invalidLogin = false
      },
      error => {
        console.log(error)
        this.invalidLogin = true
      }
    )
  }

}
