import { Component, OnInit, Input } from '@angular/core';
import { ITeam } from 'src/app/core/models/team/team';
import { UserType } from 'src/app/core/models/user/user.model';
import { SelfService } from 'src/app/services/self/self.service';

@Component({
  selector: 'app-teams-sidebar',
  templateUrl: './teams-sidebar.component.html',
  styleUrls: ['./teams-sidebar.component.scss']
})
export class TeamsSidebarComponent implements OnInit {

  @Input() teams: ITeam[];

  constructor(public selfService: SelfService) { }

  ngOnInit() {
  }

  get sortedTeams(): ITeam[] {
    if (!this.teams)
      return undefined;

    return this.teams.sort((a, b) => a.name > b.name ? 1 : -1);
  }
}
