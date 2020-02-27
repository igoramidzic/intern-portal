import { Routes } from '@angular/router';
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';
import { InternsPageComponent } from './interns-page/interns-page.component';
import { EmployeesPageComponent } from './employees-page/employees-page.component';
import { InternsAddPageComponent } from './interns-page/interns-add-page/interns-add-page.component';
import { InternsContentPageComponent } from './interns-page/interns-content-page/interns-content-page.component';

export const PAGES_ROUTES: Routes = [
    {
        path: '',
        redirectTo: 'dashboard',
    },
    {
        path: 'dashboard',
        component: DashboardPageComponent
    },
    {
        path: 'interns',
        component: InternsPageComponent,
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
        component: EmployeesPageComponent
    },
    {
        path: 'employees/:userId',
        component: EmployeesPageComponent
    }
]
