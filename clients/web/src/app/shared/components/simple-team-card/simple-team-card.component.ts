import { Component, OnInit, Input } from '@angular/core';
import { ITeam } from 'src/app/core/models/team/team';

@Component({
  selector: 'app-simple-team-card',
  templateUrl: './simple-team-card.component.html',
  styleUrls: ['./simple-team-card.component.scss']
})
export class SimpleTeamCardComponent implements OnInit {

  @Input() team: ITeam;

  constructor() { }

  ngOnInit() {
  }

}
