import { Component, OnInit, Input } from '@angular/core';
import { User, UserType } from 'src/app/core/models/user/user.model';

@Component({
  selector: 'app-user-side-card',
  templateUrl: './user-side-card.component.html',
  styleUrls: ['./user-side-card.component.scss']
})
export class UserSideCardComponent implements OnInit {

  @Input() user: User;

  UserType = UserType;

  constructor() { }

  ngOnInit() {
  }

}
