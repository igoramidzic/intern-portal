import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user/user.service';
import { IUser, UserType } from 'src/app/core/models/user/user.model';
import { SelfService } from 'src/app/services/self/self.service';
import { Employee } from 'src/app/core/models/employee/employee';
import { Intern } from 'src/app/core/models/intern/intern';
import { TeamService } from 'src/app/services/team/team.service';
import { ITeam } from 'src/app/core/models/team/team';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss']
})
export class DashboardPageComponent implements OnInit {

  users: IUser[];
  teams: ITeam[];
  UserType = UserType;

  constructor(private userService: UserService, public selfService: SelfService,
    private teamService: TeamService) { }

  ngOnInit() {
    this.getUsers();
    this.getTeams();
  }

  getUsers(): void {
    if (this.selfService.isAdminOrManager)
      this.userService.getUsers()
        .then((users: IUser[]) => this.users = users)
        .catch((err) => console.log(err))
  }

  getTeams(): void {
    if (this.selfService.isAdminOrManager)
      this.teamService.getTeams()
        .then((teams: ITeam[]) => this.teams = teams)
        .catch((err) => console.log(err))
  }
}
