import { Component, OnInit, Input } from '@angular/core';
import { IMessage } from 'src/app/core/models/message/messages';
import { IUser } from 'src/app/core/models/user/user.model';

@Component({
  selector: 'app-team-message-item',
  templateUrl: './team-message-item.component.html',
  styleUrls: ['./team-message-item.component.scss']
})
export class TeamMessageItemComponent implements OnInit {

  @Input() message: IMessage;
  @Input() user: IUser;

  constructor() { }

  ngOnInit() {
  }

}
