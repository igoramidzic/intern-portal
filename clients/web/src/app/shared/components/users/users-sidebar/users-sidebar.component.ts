import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/core/models/user/user.model';

@Component({
  selector: 'app-users-sidebar',
  templateUrl: './users-sidebar.component.html',
  styleUrls: ['./users-sidebar.component.scss']
})
export class UsersSidebarComponent implements OnInit {

  @Input() users: User[];

  constructor() { }

  ngOnInit() {
  }

  get sortedUsers(): User[] {
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

    return activeUsers.concat(deactivatedUsers);
  }
}
