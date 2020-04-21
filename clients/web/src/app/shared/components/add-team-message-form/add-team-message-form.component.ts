import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { IMessage } from 'src/app/core/models/message/messages';
import { TeamService } from 'src/app/services/team/team.service';
import { ITeam } from 'src/app/core/models/team/team';
import { ClientErrorResponse } from 'src/app/core/models/response/error-response.model';

@Component({
  selector: 'app-add-team-message-form',
  templateUrl: './add-team-message-form.component.html',
  styleUrls: ['./add-team-message-form.component.scss']
})
export class AddTeamMessageFormComponent implements OnInit {

  message: IMessage;
  isSubmitting: boolean;
  @Input() team: ITeam;
  @Output() messageAddedEmitter: EventEmitter<IMessage> = new EventEmitter();
  errors: string[];
  successes: string[];

  constructor(private teamService: TeamService) { }

  ngOnInit() {
    this.message = {
      message: ""
    }
  }

  onSubmit(): void {
    this.isSubmitting = true;
    this.errors = [];
    this.successes = [];
    this.teamService.addMessage(this.team._id, this.message)
      .then((message: IMessage) => {
        this.messageAddedEmitter.emit(message);
        this.message.message = "";
        this.successes = ["Successfully added message"];
      })
      .catch((err: ClientErrorResponse) => {
        this.errors = err.errors;
      })
      .finally(() => this.isSubmitting = false)
  }
}
