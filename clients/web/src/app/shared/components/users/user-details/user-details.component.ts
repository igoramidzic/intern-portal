import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User, UserType } from 'src/app/core/models/user/user.model';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {

  @Input() user: User;
  @Output() updatedUser: EventEmitter<User> = new EventEmitter();
  UserType = UserType;

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  deactivateOrActivateIntern(): void {
    this.userService.updateUser({ ...this.user, deactivated: this.user.deactivated ? false : true })
      .then((user: User) => {
        this.updatedUser.emit(user);
      })
      .catch((err) => console.log(err));
  }
}
