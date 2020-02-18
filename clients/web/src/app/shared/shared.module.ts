import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

import { NgPipesModule } from 'ngx-pipes';

import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from "@angular/forms";
import { InternLoginComponent } from './components/connect/intern/intern-login/intern-login.component';
import { CompanySignupComponent } from './components/connect/company/company-signup/company-signup.component';
import { CompanyLoginComponent } from './components/connect/company/company-login/company-login.component';
import { ConnectMainMenuComponent } from './components/connect/connect-main-menu/connect-main-menu.component';
import { ConnectNavbarComponent } from './components/navbars/connect-navbar/connect-navbar.component';
import { MainErrorAlertComponent } from './components/alerts/main-error-alert/main-error-alert.component';
import { MainNavbarComponent } from './components/navbars/main-navbar/main-navbar.component';
import { NavbarAccountMenuComponent } from './components/navbar-menus/navbar-account-menu/navbar-account-menu.component';
import { AdminSetupComponent } from './components/setup/admin-setup/admin-setup.component';
import { ManagerSetupComponent } from './components/setup/manager-setup/manager-setup.component';
import { InternSetupComponent } from './components/setup/intern-setup/intern-setup.component';
import { CompanySetupFormComponent } from './components/setup/admin-setup/company-setup-form/company-setup-form.component';
import { ReviewSetupFormComponent } from './components/setup/admin-setup/review-setup-form/review-setup-form.component';
import { SetupSubmittingComponent } from './components/setup/admin-setup/setup-submitting/setup-submitting.component';

@NgModule({
    declarations: [
        InternLoginComponent,
        CompanySignupComponent,
        CompanyLoginComponent,
        ConnectMainMenuComponent,
        ConnectNavbarComponent,
        MainErrorAlertComponent,
        MainNavbarComponent,
        NavbarAccountMenuComponent,
        AdminSetupComponent,
        ManagerSetupComponent,
        InternSetupComponent,
        CompanySetupFormComponent,
        ReviewSetupFormComponent,
        SetupSubmittingComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
        NgPipesModule,
    ],
    exports: [
        RouterModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        ConnectNavbarComponent,
        MainNavbarComponent,
        NavbarAccountMenuComponent,
        AdminSetupComponent,
        ManagerSetupComponent,
        InternSetupComponent,
    ],
    providers: [],
    entryComponents: []
})
export class SharedModule { }
