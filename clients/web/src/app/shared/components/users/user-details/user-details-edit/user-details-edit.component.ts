import { Component, OnInit, Input, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { IUser } from 'src/app/core/models/user/user.model';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user/user.service';
import { ClientErrorResponse } from 'src/app/core/models/response/error-response.model';

@Component({
  selector: 'app-user-details-edit',
  templateUrl: './user-details-edit.component.html'
})
export class UserDetailsEditComponent implements OnInit, OnChanges {

  @Input() user: IUser;
  @Output() userUpdatedEmitter: EventEmitter<IUser> = new EventEmitter();
  userToEdit: IUser;

  isSubmitting: boolean = false;
  errors: string[];
  successes: string[];

  updateUserForm: FormGroup;

  constructor(private fb: FormBuilder, private userService: UserService) { }

  ngOnInit() {
    this.updateUserForm = this.fb.group({
      firstName: new FormControl(this.user ? this.user.firstName : '', [Validators.required]),
      lastName: new FormControl(this.user ? this.user.lastName : '', [Validators.required]),
      email: new FormControl(this.user ? this.user.email : '', [Validators.required])
    })
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.user) {
      if (changes.user.currentValue && this.updateUserForm) {
        this.user = changes.user.currentValue;
        this.setFormValues(this.user);

        if (changes.user.currentValue._id != changes.user.previousValue._id) {
          this.successes = []
          this.errors = []
        }
      }
    }
  }

  setFormValues(user: IUser): void {
    if (!user) return;
    this.updateUserForm.controls['firstName'].setValue(user.firstName);
    this.updateUserForm.controls['lastName'].setValue(user.lastName);
    this.updateUserForm.controls['email'].setValue(user.email);
  }

  onUpdateUser(): void {
    if (this.updateUserForm.invalid) {
      this.updateUserForm.markAllAsTouched();
      return;
    };

    this.isSubmitting = true;
    this.errors = [];
    this.successes = [];

    let user: IUser = {
      ...this.updateUserForm.value,
      _id: this.user._id
    }

    this.userService.updateUser(user)
      .then((user: IUser) => {
        this.userUpdatedEmitter.emit(user);
        this.successes = ["Successfully updated"];
      })
      .catch((err: ClientErrorResponse) => this.errors = err.errors)
      .finally(() => this.isSubmitting = false)
  }

}
