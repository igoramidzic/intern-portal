import { Component, OnInit, Input } from '@angular/core';
import { ITeam } from 'src/app/core/models/team/team';
import { IUser, UserType } from 'src/app/core/models/user/user.model';
import { Intern } from 'src/app/core/models/intern/intern';
import { Employee } from 'src/app/core/models/employee/employee';

@Component({
  selector: 'app-intern-team-details',
  templateUrl: './intern-team-details.component.html',
  styleUrls: ['./intern-team-details.component.scss']
})
export class InternTeamDetailsComponent implements OnInit {

  @Input() team: ITeam;
  @Input() users: IUser[];
  UserType = UserType;

  constructor() { }

  ngOnInit() {
  }

  get interns(): Intern[] {
    if (this.users)
      return this.users
        .filter(t => this.team.members.find(uId => uId == t._id) != null)
        .filter(u => u.userType == UserType.Intern)
  }

  get employees(): Employee[] {
    if (this.users)
      return this.users
        .filter(t => this.team.members.find(uId => uId == t._id) != null)
        .filter(u => u.userType == UserType.Manager || u.userType == UserType.Admin);
  }
}
