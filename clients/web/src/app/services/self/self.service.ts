import { Injectable } from '@angular/core';
import { IUser, UserType } from 'src/app/core/models/user/user.model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ClientErrorResponse } from 'src/app/core/models/response/error-response.model';

@Injectable({
  providedIn: 'root'
})
export class SelfService {

  private _user: IUser;

  constructor(private http: HttpClient) { }

  getSelf(): Promise<IUser> {
    return new Promise((resolve, reject) => {
      this.http.get(`${environment.apiBase}/self`)
        .subscribe((user: IUser) => {
          this._user = user;
          resolve(user);
        }, (err: ClientErrorResponse) => reject(err))
    })
  }

  get user(): IUser {
    return this._user;
  }

  get userType(): UserType {
    return this._user.userType;
  }

  get isAdminOrManager(): boolean {
    return this._user.userType == UserType.Admin || this._user.userType == UserType.Manager;
  }

  get isAdmin(): boolean {
    return this._user.userType == UserType.Admin;
  }

  get isManager(): boolean {
    return this._user.userType == UserType.Manager;
  }

  get isIntern(): boolean {
    return this._user.userType == UserType.Intern;
  }

  setUser(user: IUser): void {
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
