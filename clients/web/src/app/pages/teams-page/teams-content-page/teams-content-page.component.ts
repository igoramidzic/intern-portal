import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { TeamService } from 'src/app/services/team/team.service';
import { ITeam } from 'src/app/core/models/team/team';
import { IUser } from 'src/app/core/models/user/user.model';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-teams-content-page',
  templateUrl: './teams-content-page.component.html',
  styleUrls: ['./teams-content-page.component.scss']
})
export class TeamsContentPageComponent implements OnInit {

  teamId: string;
  users: IUser[];

  constructor(private teamService: TeamService, private route: ActivatedRoute,
    private router: Router, private userService: UserService) { }

  ngOnInit() {
    this.userService.getUsers()
      .then((users: IUser[]) => this.users = users)
      .catch(() => { });
    this.route.params.subscribe((params) => {
      this.teamId = params.teamId;
    })
  }

  get teams(): ITeam[] {
    return this.teamService.teams;
  }

  get selectedTeam(): ITeam {
    if (this.teams)
      return this.teams.find(i => i._id == this.teamId);
  }

  teamUpdated(team: ITeam): void {
    let index: number = this.teams.findIndex(i => i._id == team._id);
    this.teams[index] = team;
  }

  deletedTeam(team: ITeam): void {
    this.router.navigate(['/teams']);
  }

}
