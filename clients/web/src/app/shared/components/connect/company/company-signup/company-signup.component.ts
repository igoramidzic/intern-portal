import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { Router } from '@angular/router';
import { ClientErrorResponse } from 'src/app/core/models/response/error-response.model';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { SelfService } from 'src/app/services/self/self.service';
import { IUser } from 'src/app/core/models/user/user.model';

@Component({
  selector: 'app-company-signup',
  templateUrl: './company-signup.component.html'
})
export class CompanySignupComponent implements OnInit {

  isSubmitting: boolean = false;
  errors: string[];

  signupForm: FormGroup;

  constructor(private authService: AuthService, private router: Router,
    private fb: FormBuilder, private selfService: SelfService) { }

  ngOnInit() {
    this.signupForm = this.fb.group({
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    })
  }

  onSignup(): void {
    if (this.signupForm.invalid) {
      this.signupForm.markAllAsTouched();
      return;
    };

    this.isSubmitting = true;
    this.errors = [];

    this.authService.signup(this.signupForm.value)
      .then((user: IUser) => {
        this.router.navigate(['/']);
        this.selfService.setUser(user);
      })
      .catch((err: ClientErrorResponse) => {
        this.errors = err.errors;
      })
      .finally(() => this.isSubmitting = false);
  }
}
