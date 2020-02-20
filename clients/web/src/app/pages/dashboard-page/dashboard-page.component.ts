import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user/user.service';
import { User, UserType } from 'src/app/core/models/user/user.model';
import { SelfService } from 'src/app/services/self/self.service';
import { Employee } from 'src/app/core/models/employee/employee';
import { Intern } from 'src/app/core/models/intern/intern';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss']
})
export class DashboardPageComponent implements OnInit {

  users: User[];
  UserType = UserType;

  constructor(private userService: UserService, public selfService: SelfService) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers(): void {
    if (this.selfService.isAdminOrManager)
      this.userService.getUsers()
        .then((users: User[]) => this.users = users)
        .catch((err) => console.log(err))
  }

  get employees(): Employee[] {
    if (this.users)
      return this.users.filter(u => u.userType == UserType.Manager || u.userType == UserType.Admin)
  }

  get interns(): Intern[] {
    if (this.users)
      return this.users.filter(u => u.userType == UserType.Intern)
  }
}
