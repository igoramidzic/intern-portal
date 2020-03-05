import { Component, OnInit, Input } from '@angular/core';
import { IUser, UserType } from 'src/app/core/models/user/user.model';

@Component({
  selector: 'app-user-side-card',
  templateUrl: './user-side-card.component.html'
})
export class UserSideCardComponent implements OnInit {

  @Input() user: IUser;

  UserType = UserType;

  constructor() { }

  ngOnInit() {
  }

}
