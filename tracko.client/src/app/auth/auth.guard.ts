import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { AuthServiceService } from '../services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(
    private authService: AuthServiceService,
    private router: Router
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    if (this.authService.isAuthenticated()) {
      const expectedRoles = route.data['roles'] as Array<string>;
      const userRoles = this.authService.getUserRoles();

      // Check if user has any of the expected roles
      if (
        expectedRoles &&
        expectedRoles.some((role) => userRoles.includes(role))
      ) {
        return true; // User is authenticated and has the required role(s)
      } else {
        this.router.navigate(['/forbidden']); // Redirect if role is not sufficient
        return false;
      }
    }

    //this.router.navigate(['/login']); // Redirect to login if not authenticated
    this.router.navigate(['/home']); // Redirect to login if not authenticated
    return false;
  }
}
