import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ITeam } from 'src/app/core/models/team/team';
import { TeamService } from 'src/app/services/team/team.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-team-details',
  templateUrl: './team-details.component.html',
  styleUrls: ['./team-details.component.scss']
})
export class TeamDetailsComponent implements OnInit {

  @Input() team: ITeam;
  @Output() updatedTeamEmitter: EventEmitter<ITeam> = new EventEmitter();
  @Output() deletedTeamEmitter: EventEmitter<ITeam> = new EventEmitter();

  constructor(private teamService: TeamService) { }

  ngOnInit() {
  }

  deleteTeam(): void {
    this.teamService.deleteTeam(this.team._id)
      .then((team: ITeam) => {
        this.deletedTeamEmitter.emit(team)
      })
      .catch((err) => console.log(err));
  }
}
