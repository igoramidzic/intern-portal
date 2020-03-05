import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth/auth.service';
import { Router } from '@angular/router';
import { SelfService } from 'src/app/services/self/self.service';
import { ClientErrorResponse } from 'src/app/core/models/response/error-response.model';
import { IUser } from 'src/app/core/models/user/user.model';

@Component({
  selector: 'app-company-login',
  templateUrl: './company-login.component.html'
})
export class CompanyLoginComponent implements OnInit {

  isSubmitting: boolean = false;
  errors: string[];

  loginForm: FormGroup;

  constructor(private authService: AuthService, private router: Router,
    private fb: FormBuilder, private selfService: SelfService) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    })
  }

  login(): void {
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    };

    this.isSubmitting = true;
    this.errors = [];

    this.authService.login(this.loginForm.value)
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
