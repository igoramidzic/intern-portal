import { Component, OnInit, Input } from '@angular/core';
import { IMessage } from 'src/app/core/models/message/messages';
import { IUser } from 'src/app/core/models/user/user.model';
import { TeamService } from 'src/app/services/team/team.service';

@Component({
  selector: 'app-team-messages-list',
  templateUrl: './team-messages-list.component.html',
  styleUrls: ['./team-messages-list.component.scss']
})
export class TeamMessagesListComponent implements OnInit {

  @Input() messages: IMessage[];
  @Input() users: IUser[];

  constructor(private teamService: TeamService) { }

  ngOnInit() {
  }

  getMessageOwner(message: IMessage): IUser {
    if (this.users)
      return this.users.find(u => u._id == message.user);
  }

  get _messages(): IMessage[] {
    return this.teamService.sortTeamMessagesByDate(this.messages);
  }
}
