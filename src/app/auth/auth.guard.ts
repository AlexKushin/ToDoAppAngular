import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';

export const authGuard: CanActivateFn = (route, state) => {


  const router = inject(Router);
  const hcAuthService = inject(HardcodedAuthenticationService);
  if (hcAuthService.isUserLoggedIn()) {
    return true;
  }
  router.navigate(['login']);
  return false;
};
