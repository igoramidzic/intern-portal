import { Component, OnInit, Input } from '@angular/core';
import { IUser, UserType } from 'src/app/core/models/user/user.model';

@Component({
  selector: 'app-users-card',
  templateUrl: './users-card.component.html'
})
export class UsersCardComponent implements OnInit {

  @Input() users: IUser[];
  UserType = UserType;
  filterBy: UserType;

  constructor() { }

  ngOnInit() {
  }

  get filteredUsers(): IUser[] {
    if (!this.users)
      return undefined;

    let activeUsers: IUser[] = this.users.filter(u => !u.deactivated)
      .sort((a, b) => {
        if (a.lastName > b.lastName) return 1;
        if (a.lastName < b.lastName) return -1;

        if (a.firstName > b.firstName) return 1;
        if (a.firstName < b.firstName) return -1;
      });
    let deactivatedUsers: IUser[] = this.users.filter(u => u.deactivated)
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
