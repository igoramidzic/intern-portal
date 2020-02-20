import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User, UserType } from 'src/app/core/models/user/user.model';
import { environment } from 'src/environments/environment';
import { APIs } from 'src/app/core/utils/api-urls';
import { ClientErrorResponse } from 'src/app/core/models/response/error-response.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getUsers(userTypes?: UserType[]): Promise<User[]> {
    return new Promise((resolve, reject) => {
      this.http.get(environment.apiBase + APIs.Users +
        (userTypes ? ('?userTypes=' + userTypes.join(',')) : ""))
        .subscribe((users: User[]) => {
          resolve(users);
        }, (err: ClientErrorResponse) => reject(err))
    })
  }
}
