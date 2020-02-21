import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User, UserType } from 'src/app/core/models/user/user.model';

@Component({
  selector: 'app-user-details-menu',
  templateUrl: './user-details-menu.component.html',
  styleUrls: ['./user-details-menu.component.scss']
})
export class UserDetailsMenuComponent implements OnInit {

  @Input() user: User;
  @Output() deactivateOrActivateEmitter: EventEmitter<User> = new EventEmitter();
  UserType = UserType;

  constructor() { }

  ngOnInit() {
  }

  deactivateOrActivateIntern(): void {
    this.deactivateOrActivateEmitter.emit(this.user);
  }
}
