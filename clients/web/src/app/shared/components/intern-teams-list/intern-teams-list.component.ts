import { Component, OnInit, Input } from '@angular/core';
import { Intern } from 'src/app/core/models/intern/intern';
import { ITeam } from 'src/app/core/models/team/team';

@Component({
  selector: 'app-intern-teams-list',
  templateUrl: './intern-teams-list.component.html',
  styleUrls: ['./intern-teams-list.component.scss']
})
export class InternTeamsListComponent implements OnInit {

  @Input() interns: Intern;
  @Input() teams: ITeam;

  constructor() { }

  ngOnInit() {
  }
}
