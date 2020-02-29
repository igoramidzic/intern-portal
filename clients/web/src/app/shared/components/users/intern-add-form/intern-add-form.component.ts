import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user/user.service';
import { User, UserType } from 'src/app/core/models/user/user.model';
import { ClientErrorResponse } from 'src/app/core/models/response/error-response.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-intern-add-form',
  templateUrl: './intern-add-form.component.html'
})
export class InternAddFormComponent implements OnInit {

  isSubmitting: boolean = false;
  errors: string[];
  successes: string[];

  addInternForm: FormGroup;

  constructor(private fb: FormBuilder, private userService: UserService, private router: Router) { }

  ngOnInit() {
    this.addInternForm = this.fb.group({
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    })
  }

  onAddUser(): void {
    if (this.addInternForm.invalid) {
      this.addInternForm.markAllAsTouched();
      return;
    };

    this.isSubmitting = true;
    this.errors = [];
    this.successes = [];

    let user: User = {
      ...this.addInternForm.value,
      userType: UserType.Intern
    }

    this.userService.addUser(user)
      .then((user: User) => {
        this.successes = ["Successfully updated"];
        this.router.navigate(['interns/' + user._id])
      })
      .catch((err: ClientErrorResponse) => this.errors = err.errors)
      .finally(() => this.isSubmitting = false)
  }

}
