import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { Router } from '@angular/router';
import { User, UserType } from 'src/app/core/models/user/user.model';
import { SelfService } from 'src/app/services/self/self.service';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html'
})
export class MainLayoutComponent implements OnInit {

  user: User;
  UserType = UserType;

  constructor(public authService: AuthService, public selfService: SelfService, private router: Router) { }

  ngOnInit() {
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['connect']);
  }
}
