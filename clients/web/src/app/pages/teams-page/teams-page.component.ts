import { Component, OnInit } from '@angular/core';
import { ITeam } from 'src/app/core/models/team/team';
import { TeamService } from 'src/app/services/team/team.service';

@Component({
  selector: 'app-teams-page',
  templateUrl: './teams-page.component.html',
  styleUrls: ['./teams-page.component.scss']
})
export class TeamsPageComponent implements OnInit {

  teams: ITeam[];

  constructor(private teamService: TeamService) { }

  ngOnInit() {
    this.getTeams();
  }

  getTeams(): void {
    this.teamService.getTeams()
      .then((teams: ITeam[]) => this.teams = teams)
      .catch((err) => {
        console.log(err)
      })
  }

}
