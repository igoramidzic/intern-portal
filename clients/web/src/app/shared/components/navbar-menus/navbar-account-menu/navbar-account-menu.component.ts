import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { SelfService } from 'src/app/services/self/self.service';

@Component({
  selector: 'app-navbar-account-menu',
  templateUrl: './navbar-account-menu.component.html',
  styles: []
})
export class NavbarAccountMenuComponent implements OnInit {

  constructor(public authService: AuthService, public selfService: SelfService) { }

  ngOnInit() {
  }

}
