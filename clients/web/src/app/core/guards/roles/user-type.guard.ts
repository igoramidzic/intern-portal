import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserType } from '../../models/user/user.model';
import { SelfService } from 'src/app/services/self/self.service';

@Injectable({
  providedIn: 'root'
})
export class UserTypeGuard implements CanActivate {

  constructor(private selfService: SelfService, private router: Router) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return new Promise((resolve, reject) => {
      // If we already have the user
      let userTypesNotAllowed: UserType[] = next.data.userTypesNotAllowed

      if (userTypesNotAllowed)
        for (let i = 0; i < userTypesNotAllowed.length; i++)
          if (this.selfService.userType == userTypesNotAllowed[i]) {
            this.router.navigate(['']);
            return resolve(false);
          }

      resolve(true);
    })
  }

}
