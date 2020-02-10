import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { SelfService } from 'src/app/services/self/self.service';
import { AuthService } from 'src/app/services/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class SetupCompletedGuard implements CanActivate {
  constructor(private selfService: SelfService, private router: Router,
    private authService: AuthService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return new Promise((resolve, reject) => {
      if (this.selfService.user.setupCompleted == true)
        return resolve(true);

      this.router.navigate(['setup']);
      resolve(false);
    })
  }
}
