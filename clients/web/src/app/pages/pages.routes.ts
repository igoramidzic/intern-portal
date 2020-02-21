import { Routes } from '@angular/router';
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';
import { InternsPageComponent } from './interns-page/interns-page.component';
import { EmployeesPageComponent } from './employees-page/employees-page.component';

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
        component: InternsPageComponent
    },
    {
        path: 'interns/:userId',
        component: InternsPageComponent
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
