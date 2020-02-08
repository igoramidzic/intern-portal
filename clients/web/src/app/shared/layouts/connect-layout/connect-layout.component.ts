import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-connect-layout',
  templateUrl: './connect-layout.component.html'
})
export class ConnectLayoutComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  login(): void {
    this.authService.login();
    this.router.navigate(['']);
  }
}
