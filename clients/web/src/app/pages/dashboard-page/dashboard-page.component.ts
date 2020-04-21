import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user/user.service';
import { IUser, UserType } from 'src/app/core/models/user/user.model';
import { SelfService } from 'src/app/services/self/self.service';
import { Employee } from 'src/app/core/models/employee/employee';
import { Intern } from 'src/app/core/models/intern/intern';
import { TeamService } from 'src/app/services/team/team.service';
import { ITeam } from 'src/app/core/models/team/team';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss']
})
export class DashboardPageComponent implements OnInit {

  users: IUser[];
  teams: ITeam[];
  UserType = UserType;
  selectedTeam: ITeam;

  constructor(private userService: UserService, public selfService: SelfService,
    private teamService: TeamService, private route: ActivatedRoute) { }

  ngOnInit() {
    Promise.all([
      this.userService.getUsers(),
      this.teamService.getTeams()
    ])
      .then((res) => {
        this.users = this.userService.sortUsersByName(res[0]);
        this.teams = this.teamService.sortTeamsByName(res[1]);

        this.route.queryParams.subscribe((params) => {
          if (params.team)
            this.selectedTeam = this.fintTeamById(params.team);
          else
            this.selectedTeam = null;
        })
      })
      .catch(() => {
      })
  }

  fintTeamById(id: string): ITeam {
    if (this.teams)
      return this.teams.find(t => t._id == id);
  }

  get interns(): Intern[] {
    if (this.users)
      return this.users.filter(u => u.userType == UserType.Intern);
  }
}
