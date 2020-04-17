import { Injectable } from '@angular/core';
import { IUser, UserType } from 'src/app/core/models/user/user.model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ClientErrorResponse } from 'src/app/core/models/response/error-response.model';
import { Company } from 'src/app/core/models/company/company.model';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  private _company: Company;

  constructor(private http: HttpClient) { }

  getCompany(): Promise<Company> {
    return new Promise((resolve, reject) => {
      this.http.get(`${environment.apiBase}/company`)
        .subscribe((company: Company) => {
          this._company = company;
          resolve(company);
        }, (err: ClientErrorResponse) => reject(err))
    })
  }

  get company(): Company {
    return this._company;
  }

  get companyName(): string {
    return this._company.name;
  }

  setCompany(company: Company): void {
    this._company = company;
  }

  removeCompany(): void {
    this._company = null;
  }
}
