import { Component, OnInit, Input } from '@angular/core';
import { ITeam } from 'src/app/core/models/team/team';

@Component({
  selector: 'app-team-side-card',
  templateUrl: './team-side-card.component.html'
})
export class TeamSideCardComponent implements OnInit {

  @Input() team: ITeam;

  constructor() { }

  ngOnInit() {
  }

}
