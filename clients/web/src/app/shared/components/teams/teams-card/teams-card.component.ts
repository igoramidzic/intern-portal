import { Component, OnInit, Input } from '@angular/core';
import { ITeam } from 'src/app/core/models/team/team';

@Component({
  selector: 'app-teams-card',
  templateUrl: './teams-card.component.html'
})
export class TeamsCardComponent implements OnInit {
  @Input() teams: ITeam[];

  constructor() { }

  ngOnInit() {
  }

}
