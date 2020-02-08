import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from "@angular/forms";
import { InternLoginComponent } from './components/connect/intern/intern-login/intern-login.component';
import { CompanySignupComponent } from './components/connect/company/company-signup/company-signup.component';
import { CompanyLoginComponent } from './components/connect/company/company-login/company-login.component';
import { ConnectMainMenuComponent } from './components/connect/connect-main-menu/connect-main-menu.component';
import { ConnectNavbarComponent } from './components/navbars/connect-navbar/connect-navbar.component';
import { MainErrorAlertComponent } from './components/alerts/main-error-alert/main-error-alert.component';

@NgModule({
    declarations: [
        InternLoginComponent,
        CompanySignupComponent,
        CompanyLoginComponent,
        ConnectMainMenuComponent,
        ConnectNavbarComponent,
        MainErrorAlertComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
    ],
    exports: [
        RouterModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        ConnectNavbarComponent
    ],
    providers: [],
    entryComponents: []
})
export class SharedModule { }
