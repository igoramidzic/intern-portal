import { Component, OnInit, Input, Output, EventEmitter, SimpleChanges } from '@angular/core';
import { ITeam } from 'src/app/core/models/team/team';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { TeamService } from 'src/app/services/team/team.service';
import { ClientErrorResponse } from 'src/app/core/models/response/error-response.model';

@Component({
  selector: 'app-team-details-edit',
  templateUrl: './team-details-edit.component.html',
  styleUrls: ['./team-details-edit.component.scss']
})
export class TeamDetailsEditComponent implements OnInit {

  @Input() team: ITeam;
  @Output() teamUpdatedEmitter: EventEmitter<ITeam> = new EventEmitter();
  teamToEdit: ITeam;

  isSubmitting: boolean = false;
  errors: string[];
  successes: string[];

  updateTeamForm: FormGroup;

  constructor(private fb: FormBuilder, private teamService: TeamService) { }

  ngOnInit() {
    this.updateTeamForm = this.fb.group({
      name: new FormControl(this.team ? this.team.name : '', [Validators.required]),
      department: new FormControl(this.team ? this.team.department : '')
    })
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.team) {
      if (changes.team.currentValue && this.updateTeamForm) {
        this.team = changes.team.currentValue;
        this.setFormValues(this.team);

        if (changes.team.currentValue._id != changes.team.previousValue._id) {
          this.successes = []
          this.errors = []
        }
      }
    }
  }

  setFormValues(team: ITeam): void {
    if (!team) return;
    this.updateTeamForm.controls['name'].setValue(team.name);
    this.updateTeamForm.controls['department'].setValue(team.department);
  }

  onUpdateTeam(): void {
    if (this.updateTeamForm.invalid) {
      this.updateTeamForm.markAllAsTouched();
      return;
    };

    this.isSubmitting = true;
    this.errors = [];
    this.successes = [];

    let team: ITeam = {
      ...this.updateTeamForm.value,
      _id: this.team._id
    }

    this.teamService.updateTeam(team)
      .then((team: ITeam) => {
        this.teamUpdatedEmitter.emit(team);
        this.successes = ["Successfully updated"];
      })
      .catch((err: ClientErrorResponse) => this.errors = err.errors)
      .finally(() => this.isSubmitting = false)
  }

}
