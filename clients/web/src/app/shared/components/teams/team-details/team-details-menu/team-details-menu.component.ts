import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ITeam } from 'src/app/core/models/team/team';
import { TeamService } from 'src/app/services/team/team.service';

@Component({
  selector: 'app-team-details-menu',
  templateUrl: './team-details-menu.component.html',
  styleUrls: ['./team-details-menu.component.scss']
})
export class TeamDetailsMenuComponent implements OnInit {

  @Input() team: ITeam;
  @Output() deleteTeamEmitter: EventEmitter<ITeam> = new EventEmitter();

  constructor(private teamService: TeamService) { }

  ngOnInit() {
  }

  deleteTeam(): void {
    this.deleteTeamEmitter.emit(this.team);
  }
}
