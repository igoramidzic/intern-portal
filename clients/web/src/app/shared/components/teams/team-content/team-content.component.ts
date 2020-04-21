import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ITeam } from 'src/app/core/models/team/team';
import { IUser } from 'src/app/core/models/user/user.model';
import { IMessage } from 'src/app/core/models/message/messages';

@Component({
  selector: 'app-team-content',
  templateUrl: './team-content.component.html',
  styleUrls: ['./team-content.component.scss']
})
export class TeamContentComponent implements OnInit {

  @Input() users: IUser[];
  @Input() team: ITeam;
  @Output() teamUpdatedEmitter: EventEmitter<ITeam> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  teamUpdated(team: ITeam): void {
    this.teamUpdatedEmitter.emit(team);
  }

  messageAdded(message: IMessage): void {
    this.team.messages.push(message);
  }
}
