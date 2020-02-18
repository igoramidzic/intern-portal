import { Injectable } from '@angular/core';
import { Company } from 'src/app/core/models/company/company.model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { APIs } from 'src/app/core/utils/api-urls';
import { ClientErrorResponse } from 'src/app/core/models/response/error-response.model';

@Injectable({
  providedIn: 'root'
})
export class SetupService {

  constructor(private http: HttpClient) { }

  setupAdmin(data: { company: Company }): Promise<{ company: Company }> {
    return new Promise((resolve, reject) => {
      this.http.post(`${environment.apiBase}${APIs.Setup.Admin}`, data)
        .subscribe((result: { company: Company }) => {
          resolve(result);
        }, (err: ClientErrorResponse) => reject(err))
    })
  }
}
