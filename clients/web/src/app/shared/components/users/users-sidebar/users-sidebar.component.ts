import { Component, OnInit, Input } from '@angular/core';
import { User, UserType } from 'src/app/core/models/user/user.model';
import { SelfService } from 'src/app/services/self/self.service';

@Component({
  selector: 'app-users-sidebar',
  templateUrl: './users-sidebar.component.html',
  styleUrls: ['./users-sidebar.component.scss']
})
export class UsersSidebarComponent implements OnInit {

  @Input() users: User[];
  UserType = UserType

  constructor(private selfService: SelfService) { }

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

  get shouldShowAddButton(): boolean {
    return (this.users[0].userType == UserType.Admin || this.users[0].userType == UserType.Manager) && this.selfService.isAdmin
  }
}
