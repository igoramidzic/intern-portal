import { Component, OnInit, Input } from '@angular/core';
import { User, UserType } from 'src/app/core/models/user/user.model';

@Component({
  selector: 'app-users-card',
  templateUrl: './users-card.component.html',
  styleUrls: ['./users-card.component.scss']
})
export class UsersCardComponent implements OnInit {

  @Input() users: User[];
  UserType = UserType;
  filterBy: UserType;

  constructor() { }

  ngOnInit() {
  }

  get filteredUsers(): User[] {
    if (!this.users)
      return undefined;

    if (this.filterBy)
      return this.users.filter(u => u.userType == this.filterBy).sort((a, b) => a.lastName < b.lastName ? -1 : 1);

    return this.users.sort((a, b) => a.lastName < b.lastName ? -1 : 1)
  }
}
