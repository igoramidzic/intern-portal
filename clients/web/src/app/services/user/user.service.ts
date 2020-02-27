import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User, UserType } from 'src/app/core/models/user/user.model';
import { environment } from 'src/environments/environment';
import { APIs } from 'src/app/core/utils/api-urls';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private _users: User[];

  constructor(private http: HttpClient) { }

  getUsers(userTypes?: UserType[]): Promise<User[]> {
    return new Promise((resolve, reject) => {
      this.http.get(environment.apiBase + APIs.Users +
        (userTypes ? ('?userTypes=' + userTypes.join(',')) : ""))
        .subscribe((users: User[]) => {
          this._users = users;
          resolve(users);
        }, (err) => reject(err.error))
    })
  }

  updateUser<T extends User>(user: T): Promise<T> {
    return new Promise((resolve, reject) => {
      this.http.put(environment.apiBase + APIs.Users + "/" + user._id, user)
        .subscribe((user: T) => {
          resolve(user);
        }, (err) => reject(err.error))
    })
  }

  get users(): User[] {
    return this._users;
  }
}