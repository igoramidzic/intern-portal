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

  deleteUser(userId: string): Promise<User> {
    return new Promise((resolve, reject) => {
      this.http.delete(environment.apiBase + APIs.Users + "/" + userId)
        .subscribe((user: User) => {
          this.removeUserFromUsers(user);
          resolve(user);
        }, (err) => reject(err.error))
    })
  }

  addUser<T extends User>(user: T): Promise<T> {
    return new Promise((resolve, reject) => {
      this.http.post(environment.apiBase + APIs.Users, user)
        .subscribe((user: T) => {
          if (this._users)
            this._users.push(user)
          resolve(user);
        }, (err) => reject(err.error))
    })
  }

  private removeUserFromUsers(user: User): void {
    let index: number = this._users.findIndex(u => u._id == user._id);
    if (index != -1)
      this._users.splice(index, 1);
  }

  get users(): User[] {
    return this._users;
  }
}
