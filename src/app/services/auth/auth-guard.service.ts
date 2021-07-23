import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuardService implements CanActivate {
  constructor(private router: Router, private authService: AuthService) {}

  canActivate(route: ActivatedRouteSnapshot): boolean {
    if (!this.authService.isUserLoggedIn()) {
      alert('You are not allowed to view this page');
      console.log(this.authService.isUserLoggedIn());

      this.router.navigate(['home'], { queryParams: { retUrl: route.url } });
      return false;
    }

    return true;
  }
}
