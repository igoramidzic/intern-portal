import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth/auth.service';
import { ClientErrorResponse } from '../../models/response/error-response.model';
import { CompanyService } from 'src/app/services/company/company.service';
import { Company } from '../../models/company/company.model';

@Injectable({
  providedIn: 'root'
})
export class CompanyGuard implements CanActivate {
  constructor(private companyService: CompanyService, private router: Router,
    private authService: AuthService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return new Promise((resolve, reject) => {
      // If we already have the company
      if (this.companyService.company) {
        return resolve(true);
      }

      // Update the company from server
      this.companyService.getCompany()
        .then((company: Company) => {
          resolve(true);
        })
        .catch((res: ClientErrorResponse) => {
          this.authService.logout();
          resolve(false);
        })
    })
  }
}
