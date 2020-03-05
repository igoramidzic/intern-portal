import { Routes } from '@angular/router';
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';
import { InternsPageComponent } from './interns-page/interns-page.component';
import { EmployeesPageComponent } from './employees-page/employees-page.component';
import { InternsAddPageComponent } from './interns-page/interns-add-page/interns-add-page.component';
import { InternsContentPageComponent } from './interns-page/interns-content-page/interns-content-page.component';
import { EmployeesContentPageComponent } from './employees-page/employees-content-page/employees-content-page.component';
import { EmployeesAddPageComponent } from './employees-page/employees-add-page/employees-add-page.component';
import { UserTypeGuard } from '../core/guards/roles/user-type.guard';
import { UserType } from '../core/models/user/user.model';
import { TeamsPageComponent } from './teams-page/teams-page.component';
import { TeamsContentPageComponent } from './teams-page/teams-content-page/teams-content-page.component';
import { TeamsAddPageComponent } from './teams-page/teams-add-page/teams-add-page.component';

export const PAGES_ROUTES: Routes = [
    {
        path: '',
        redirectTo: 'dashboard'
    },
    {
        path: 'dashboard',
        component: DashboardPageComponent
    },
    {
        path: 'interns',
        component: InternsPageComponent,
        canActivate: [UserTypeGuard],
        data: { userTypesNotAllowed: [UserType.Intern] },
        children: [
            {
                path: '',
                component: InternsContentPageComponent
            },
            {
                path: 'add',
                component: InternsAddPageComponent
            },
            {
                path: ':userId',
                component: InternsContentPageComponent
            },
        ]
    },
    {
        path: 'employees',
        component: EmployeesPageComponent,
        canActivate: [UserTypeGuard],
        data: { userTypesNotAllowed: [UserType.Intern] },
        children: [
            {
                path: '',
                component: EmployeesContentPageComponent
            },
            {
                path: 'add',
                component: EmployeesAddPageComponent,
                canActivate: [UserTypeGuard],
                data: { userTypesNotAllowed: [UserType.Manager] },
            },
            {
                path: ':userId',
                component: EmployeesContentPageComponent
            },
        ]
    },
    {
        path: 'teams',
        component: TeamsPageComponent,
        canActivate: [UserTypeGuard],
        data: { userTypesNotAllowed: [UserType.Intern] },
        children: [
            {
                path: '',
                component: TeamsContentPageComponent
            },
            {
                path: 'add',
                component: TeamsAddPageComponent
            },
            {
                path: ':teamId',
                component: TeamsContentPageComponent
            },
        ]
    }
]
