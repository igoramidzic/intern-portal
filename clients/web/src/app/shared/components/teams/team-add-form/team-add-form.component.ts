import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user/user.service';
import { Router } from '@angular/router';
import { IUser, UserType } from 'src/app/core/models/user/user.model';
import { ClientErrorResponse } from 'src/app/core/models/response/error-response.model';
import { ITeam } from 'src/app/core/models/team/team';
import { TeamService } from 'src/app/services/team/team.service';

@Component({
  selector: 'app-team-add-form',
  templateUrl: './team-add-form.component.html'
})
export class TeamAddFormComponent implements OnInit {

  isSubmitting: boolean = false;
  errors: string[];
  successes: string[];

  addTeamForm: FormGroup;

  constructor(private fb: FormBuilder, private teamService: TeamService, private router: Router) { }

  ngOnInit() {
    this.addTeamForm = this.fb.group({
      name: new FormControl('', [Validators.required])
    })
  }

  onAddTeam(): void {
    if (this.addTeamForm.invalid) {
      this.addTeamForm.markAllAsTouched();
      return;
    };

    this.isSubmitting = true;
    this.errors = [];
    this.successes = [];

    let team: ITeam = {
      ...this.addTeamForm.value
    }

    this.teamService.addTeam(team)
      .then((team: ITeam) => {
        this.router.navigate(['teams/' + team._id])
      })
      .catch((err: ClientErrorResponse) => this.errors = err.errors)
      .finally(() => this.isSubmitting = false)
  }
}
