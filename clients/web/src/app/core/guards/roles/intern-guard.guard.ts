import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { SelfService } from 'src/app/services/self/self.service';
import { User, UserType } from '../../models/user/user.model';

@Injectable({
  providedIn: 'root'
})
export class InternGuard implements CanActivate {
  constructor(private selfService: SelfService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return new Promise((resolve, reject) => {
      // If we already have the user
      if (this.selfService.user.userType == UserType.Intern)
        return resolve(true);

      this.router.navigate(['']);
      resolve(false);
    })
  }
}
