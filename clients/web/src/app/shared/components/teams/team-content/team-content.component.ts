import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ITeam } from 'src/app/core/models/team/team';

@Component({
  selector: 'app-team-content',
  templateUrl: './team-content.component.html',
  styleUrls: ['./team-content.component.scss']
})
export class TeamContentComponent implements OnInit {

  @Input() team: ITeam;
  @Output() teamUpdatedEmitter: EventEmitter<ITeam> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  teamUpdated(team: ITeam): void {
    this.teamUpdatedEmitter.emit(team);
  }

}
