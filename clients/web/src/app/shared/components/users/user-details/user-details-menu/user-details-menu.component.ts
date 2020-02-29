import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User, UserType } from 'src/app/core/models/user/user.model';
import { SelfService } from 'src/app/services/self/self.service';

@Component({
  selector: 'app-user-details-menu',
  templateUrl: './user-details-menu.component.html',
  styleUrls: ['./user-details-menu.component.scss']
})
export class UserDetailsMenuComponent implements OnInit {

  @Input() user: User;
  @Output() deactivateOrActivateEmitter: EventEmitter<User> = new EventEmitter();
  @Output() deleteUserEmitter: EventEmitter<User> = new EventEmitter();
  UserType = UserType;

  constructor(private selfService: SelfService) { }

  ngOnInit() {
  }

  deactivateOrActivateIntern(): void {
    this.deactivateOrActivateEmitter.emit(this.user);
  }

  deleteUser(): void {
    this.deleteUserEmitter.emit(this.user);
  }

  get shouldShowDeactivateButton(): boolean {
    return this.user.userType == UserType.Intern || this.selfService.isAdmin
  }
}
