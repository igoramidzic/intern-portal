import { Injectable } from '@angular/core';
import { User, UserType } from 'src/app/core/models/user/user.model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ClientErrorResponse } from 'src/app/core/models/response/error-response.model';

@Injectable({
  providedIn: 'root'
})
export class SelfService {

  private _user: User;

  constructor(private http: HttpClient) { }

  getSelf(): Promise<User> {
    return new Promise((resolve, reject) => {
      this.http.get(`${environment.apiBase}/self`)
        .subscribe((user: User) => {
          this._user = user;
          resolve(user);
        }, (err: ClientErrorResponse) => reject(err))
    })
  }

  get user(): User {
    return this._user;
  }

  get userType(): UserType {
    return this._user.userType;
  }

  setUser(user: User): void {
    this._user = user;
  }

  removeUser(): void {
    this._user = null;
  }

  fullName(): string {
    if (!this._user)
      return "";
    return this._user.firstName + " " + this._user.lastName;
  }
}
