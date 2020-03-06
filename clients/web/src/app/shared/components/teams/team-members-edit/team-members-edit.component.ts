import { Component, OnInit, Input, Output } from '@angular/core';
import { UserService } from 'src/app/services/user/user.service';
import { IUser } from 'src/app/core/models/user/user.model';
import { ITeam } from 'src/app/core/models/team/team';
import { TeamService } from 'src/app/services/team/team.service';

@Component({
  selector: 'app-team-members-edit',
  templateUrl: './team-members-edit.component.html',
  styleUrls: ['./team-members-edit.component.scss']
})
export class TeamMembersEditComponent implements OnInit {

  @Input() team: ITeam;
  @Output()
  users: IUser[];

  constructor(private userService: UserService, private teamService: TeamService) { }

  ngOnInit() {
    this.getUsers()
  }

  getUsers(): void {
    this.userService.getUsers()
      .then((users: IUser[]) => {
        this.users = users;
      })
      .catch(() => { })
  }

  userIsInTeam(user: IUser): boolean {
    return this.team.members.findIndex(m => m == user._id) >= 0;
  }

  amendUserToMembers(user: IUser): void {
    let indexOfUserInMembers: number = this.team.members.findIndex(m => m == user._id);
    let members: string[] = this.team.members;
    if (indexOfUserInMembers != -1)
      members.splice(indexOfUserInMembers, 1)
    else
      members.push(user._id)

    this.teamService.updateTeam({ _id: this.team._id, members })
      .then((team: ITeam) => { })
      .catch(() => { })
  }

  get usersSorted(): IUser[] {
    if (!this.users)
      return undefined;

    let activeUsers: IUser[] = this.users.filter(u => !u.deactivated)
      .sort((a, b) => {
        if (a.lastName > b.lastName) return 1;
        if (a.lastName < b.lastName) return -1;

        if (a.firstName > b.firstName) return 1;
        if (a.firstName < b.firstName) return -1;
      });
    let deactivatedUsers: IUser[] = this.users.filter(u => u.deactivated)
      .sort((a, b) => {
        if (a.lastName > b.lastName) return 1;
        if (a.lastName < b.lastName) return -1;

        if (a.firstName > b.firstName) return 1;
        if (a.firstName < b.firstName) return -1;
      });

    return activeUsers.concat(deactivatedUsers);
  }
}
