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

    let activeUsers: User[] = this.users.filter(u => !u.deactivated)
      .sort((a, b) => {
        if (a.lastName > b.lastName) return 1;
        if (a.lastName < b.lastName) return -1;

        if (a.firstName > b.firstName) return 1;
        if (a.firstName < b.firstName) return -1;
      });
    let deactivatedUsers: User[] = this.users.filter(u => u.deactivated)
      .sort((a, b) => {
        if (a.lastName > b.lastName) return 1;
        if (a.lastName < b.lastName) return -1;

        if (a.firstName > b.firstName) return 1;
        if (a.firstName < b.firstName) return -1;
      });

    return activeUsers.concat(deactivatedUsers)
      .filter(u => {
        if (this.filterBy) {
          return u.userType == this.filterBy
        }
        return true;
      })
  }
}
