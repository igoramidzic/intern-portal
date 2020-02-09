import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { SelfService } from 'src/app/services/self/self.service';
import { AuthService } from 'src/app/services/auth/auth.service';
import { User } from '../../models/user/user.model';
import { ClientErrorResponse } from '../../models/response/error-response.model';

@Injectable({
  providedIn: 'root'
})
export class SelfGuard implements CanActivate {
  constructor(private selfService: SelfService, private router: Router,
    private authService: AuthService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return new Promise((resolve, reject) => {
      // If we already have the user
      if (this.selfService.user) {
        return resolve(true);
      }

      // Update the user from server
      this.selfService.getSelf()
        .then((user: User) => {
          resolve(true);
        })
        .catch((res: ClientErrorResponse) => {
          this.authService.logout();
          resolve(false);
        })
    })
  }
}
