import { Component, OnInit, Input } from '@angular/core';
import { UserType } from 'src/app/core/models/user/user.model';

@Component({
  selector: 'app-user-add-side-card',
  templateUrl: './user-add-side-card.component.html',
  styleUrls: ['./user-add-side-card.component.scss']
})
export class UserAddSideCardComponent implements OnInit {

  @Input() userType: UserType;
  UserType = UserType;

  constructor() { }

  ngOnInit() {
  }

}
