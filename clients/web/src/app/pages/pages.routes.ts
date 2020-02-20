import { Routes } from '@angular/router';
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';

export const PAGES_ROUTES: Routes = [
    {
        path: '',
        redirectTo: 'dashboard',
    },
    {
        path: 'dashboard',
        component: DashboardPageComponent
    }
]
