import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IUser, UserType } from 'src/app/core/models/user/user.model';
import { UserService } from 'src/app/services/user/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {

  @Input() user: IUser;
  @Output() updatedUserEmitter: EventEmitter<IUser> = new EventEmitter();
  @Output() deletedUserEmitter: EventEmitter<IUser> = new EventEmitter();
  UserType = UserType;

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
  }

  deactivateOrActivateIntern(): void {
    this.userService.updateUser({ ...this.user, deactivated: this.user.deactivated ? false : true })
      .then((user: IUser) => {
        this.updatedUserEmitter.emit(user);
      })
      .catch((err) => console.log(err));
  }

  deleteUser(): void {
    this.userService.deleteUser(this.user._id)
      .then((user: IUser) => {
        this.deletedUserEmitter.emit(user)
      })
      .catch((err) => console.log(err));
  }
}
