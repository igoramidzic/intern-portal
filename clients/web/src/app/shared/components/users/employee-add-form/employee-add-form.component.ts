import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user/user.service';
import { Router } from '@angular/router';
import { User, UserType } from 'src/app/core/models/user/user.model';
import { ClientErrorResponse } from 'src/app/core/models/response/error-response.model';

@Component({
  selector: 'app-employee-add-form',
  templateUrl: './employee-add-form.component.html'
})
export class EmployeeAddFormComponent implements OnInit {

  isSubmitting: boolean = false;
  errors: string[];
  successes: string[];
  UserType = UserType;

  addEmployeeForm: FormGroup;

  constructor(private fb: FormBuilder, private userService: UserService, private router: Router) { }

  ngOnInit() {
    this.addEmployeeForm = this.fb.group({
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
      userType: new FormControl(UserType.Manager, [Validators.required])
    })
  }

  onAddUser(): void {
    if (this.addEmployeeForm.invalid) {
      this.addEmployeeForm.markAllAsTouched();
      return;
    };

    this.isSubmitting = true;
    this.errors = [];
    this.successes = [];

    let user: User = {
      ...this.addEmployeeForm.value
    }

    this.userService.addUser(user)
      .then((user: User) => {
        this.successes = ["Successfully updated"];
        this.router.navigate(['employees/' + user._id])
      })
      .catch((err: ClientErrorResponse) => this.errors = err.errors)
      .finally(() => this.isSubmitting = false)
  }

}
