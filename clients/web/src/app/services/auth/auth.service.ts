import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Router } from '@angular/router';
import { ClientErrorResponse } from 'src/app/core/models/response/error-response.model';
import { IUser } from 'src/app/core/models/user/user.model';
import { environment } from 'src/environments/environment';
import { SelfService } from '../self/self.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private accessTokenName: string = 'access_token';

  constructor(private http: HttpClient, private jwtHelperService: JwtHelperService,
    private router: Router, private selfService: SelfService) { }

  get isAuthenticated(): boolean {
    const token = localStorage.getItem(this.accessTokenName);
    return !this.jwtHelperService.isTokenExpired(token);
  }

  login(user: IUser): Promise<IUser> {
    return new Promise((resolve, reject) => {
      this.http.post(`${environment.apiBase}/auth/login`, user)
        .subscribe((res: { user: IUser, token: string }) => {
          this.storeJwtTokenInLocalStorage(res.token);
          resolve(res.user);
        }, (err: { error: ClientErrorResponse }) => {
          reject(err.error);
        })
    })
  }

  signup(user: IUser): Promise<IUser> {
    return new Promise((resolve, reject) => {
      this.http.post(`${environment.apiBase}/auth/register`, user)
        .subscribe((res: { user: IUser, token: string }) => {
          this.storeJwtTokenInLocalStorage(res.token);
          resolve(res.user);
        }, (err: { error: ClientErrorResponse }) => {
          reject(err.error);
        })
    })
  }

  logout(): Promise<any> {
    return new Promise((resolve, reject) => {
      localStorage.removeItem(this.accessTokenName);
      this.selfService.removeUser();
      this.router.navigate(['connect']);
      resolve();
    })
  }

  storeJwtTokenInLocalStorage(token: string): void {
    localStorage.setItem(this.accessTokenName, token);
  }
}
