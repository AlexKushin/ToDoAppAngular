import { Component, OnInit } from '@angular/core';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';
import { AuthenticationService } from '../service/authentication.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit{
  
  constructor(
    private hardcodedAuthenticatedService: HardcodedAuthenticationService,
    private authService: AuthenticationService
  ){}
  
  
  ngOnInit(): void {
   // this.hardcodedAuthenticatedService.logout();
    this.authService.logout();
  }
}
