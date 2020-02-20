import { Component, OnInit, Input } from '@angular/core';
import { UserType } from 'src/app/core/models/user/user.model';

@Component({
  selector: 'app-user-type-badge',
  templateUrl: './user-type-badge.component.html',
  styleUrls: ['./user-type-badge.component.scss']
})
export class UserTypeBadgeComponent implements OnInit {

  @Input() userType: UserType;
  @Input() size: string;

  UserType = UserType;

  constructor() { }

  ngOnInit() {
  }

}
