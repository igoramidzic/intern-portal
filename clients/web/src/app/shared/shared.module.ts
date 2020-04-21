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
import { ManagerSetupReviewFormComponent } from './components/setup/manager-setup/manager-setup-review-form/manager-setup-review-form.component';
import { SetupSubmittingComponent } from './components/setup/setup-submitting/setup-submitting.component';
import { InternSetupReviewFormComponent } from './components/setup/intern-setup/intern-setup-review-form/intern-setup-review-form.component';
import { UserTypeBadgeComponent } from './components/badges/user-type-badge/user-type-badge.component';
import { UsersCardComponent } from './components/users/users-card/users-card.component';
import { UsersSidebarComponent } from './components/users/users-sidebar/users-sidebar.component';
import { UserSideCardComponent } from './components/users/user-side-card/user-side-card.component';
import { UserSmallBarComponent } from './components/users/user-small-bar/user-small-bar.component';
import { NoUserSelectedComponent } from './components/users/no-user-selected/no-user-selected.component';
import { UserDetailsComponent } from './components/users/user-details/user-details.component';
import { UserDetailsMenuComponent } from './components/users/user-details/user-details-menu/user-details-menu.component';
import { UserDetailsEditComponent } from './components/users/user-details/user-details-edit/user-details-edit.component';
import { UserContentComponent } from './components/users/user-content/user-content.component';
import { MainSuccessAlertComponent } from './components/alerts/main-success-alert/main-success-alert.component';
import { UserAddSideCardComponent } from './components/users/user-add-side-card/user-add-side-card.component';
import { InternAddFormComponent } from './components/users/intern-add-form/intern-add-form.component';
import { EmployeeAddFormComponent } from './components/users/employee-add-form/employee-add-form.component';
import { TeamsCardComponent } from './components/teams/teams-card/teams-card.component';
import { TeamAddFormComponent } from './components/teams/team-add-form/team-add-form.component';
import { TeamsSidebarComponent } from './components/teams/teams-sidebar/teams-sidebar.component';
import { TeamAddSideCardComponent } from './components/teams/team-add-side-card/team-add-side-card.component';
import { TeamSideCardComponent } from './components/teams/team-side-card/team-side-card.component';
import { TeamContentComponent } from './components/teams/team-content/team-content.component';
import { TeamDetailsComponent } from './components/teams/team-details/team-details.component';
import { TeamDetailsEditComponent } from './components/teams/team-details/team-details-edit/team-details-edit.component';
import { TeamDetailsMenuComponent } from './components/teams/team-details/team-details-menu/team-details-menu.component';
import { NoTeamSelectedComponent } from './components/teams/no-team-selected/no-team-selected.component';
import { TeamMembersEditComponent } from './components/teams/team-members-edit/team-members-edit.component';
import { WelcomeInternComponent } from './components/welcome-intern/welcome-intern.component';
import { CompanyInfoSimpleComponent } from './components/company-info-simple/company-info-simple.component';
import { WelcomeEmployeeComponent } from './components/welcome-employee/welcome-employee.component';
import { ActiveAccountIndicatorComponent } from './components/active-account-indicator/active-account-indicator.component';
import { FellowInternsListComponent } from './components/fellow-interns-list/fellow-interns-list.component';
import { SimpleUserCardComponent } from './components/simple-user-card/simple-user-card.component';
import { InternTeamsListComponent } from './components/intern-teams-list/intern-teams-list.component';
import { SimpleTeamCardComponent } from './components/simple-team-card/simple-team-card.component';
import { InternTeamDetailsComponent } from './components/intern-team-details/intern-team-details.component';
import { TeamMessagesListComponent } from './components/team-messages-list/team-messages-list.component';
import { TeamMessageItemComponent } from './components/team-message-item/team-message-item.component';

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
        ManagerSetupReviewFormComponent,
        InternSetupReviewFormComponent,
        UserTypeBadgeComponent,
        UsersCardComponent,
        UsersSidebarComponent,
        UserSideCardComponent,
        UserSmallBarComponent,
        NoUserSelectedComponent,
        UserDetailsComponent,
        UserDetailsMenuComponent,
        UserDetailsEditComponent,
        UserContentComponent,
        MainSuccessAlertComponent,
        UserAddSideCardComponent,
        InternAddFormComponent,
        EmployeeAddFormComponent,
        TeamsCardComponent,
        TeamAddFormComponent,
        TeamsSidebarComponent,
        TeamAddSideCardComponent,
        TeamSideCardComponent,
        TeamContentComponent,
        TeamDetailsComponent,
        TeamDetailsEditComponent,
        TeamDetailsMenuComponent,
        NoTeamSelectedComponent,
        TeamMembersEditComponent,
        WelcomeInternComponent,
        CompanyInfoSimpleComponent,
        WelcomeEmployeeComponent,
        ActiveAccountIndicatorComponent,
        FellowInternsListComponent,
        SimpleUserCardComponent,
        InternTeamsListComponent,
        SimpleTeamCardComponent,
        InternTeamDetailsComponent,
        TeamMessagesListComponent,
        TeamMessageItemComponent,
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
        SetupSubmittingComponent,
        UserTypeBadgeComponent,
        UsersCardComponent,
        UsersSidebarComponent,
        UserSideCardComponent,
        UserSmallBarComponent,
        NoUserSelectedComponent,
        UserDetailsComponent,
        UserContentComponent,
        MainSuccessAlertComponent,
        UserAddSideCardComponent,
        InternAddFormComponent,
        EmployeeAddFormComponent,
        TeamsCardComponent,
        TeamAddFormComponent,
        TeamsSidebarComponent,
        TeamAddSideCardComponent,
        TeamSideCardComponent,
        TeamContentComponent,
        TeamDetailsComponent,
        TeamDetailsEditComponent,
        TeamDetailsMenuComponent,
        NoTeamSelectedComponent,
        TeamMembersEditComponent,
        WelcomeInternComponent,
        CompanyInfoSimpleComponent,
        WelcomeEmployeeComponent,
        ActiveAccountIndicatorComponent,
        FellowInternsListComponent,
        InternTeamsListComponent,
        InternTeamDetailsComponent,
    ],
    providers: [],
    entryComponents: []
})
export class SharedModule { }
