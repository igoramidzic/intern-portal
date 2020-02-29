import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { HomePageComponent } from './home-page/home-page.component';
import { PAGES_ROUTES } from './pages.routes';
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';
import { InternsPageComponent } from './interns-page/interns-page.component';
import { EmployeesPageComponent } from './employees-page/employees-page.component';
import { InternsAddPageComponent } from './interns-page/interns-add-page/interns-add-page.component';
import { InternsContentPageComponent } from './interns-page/interns-content-page/interns-content-page.component';
import { EmployeesAddPageComponent } from './employees-page/employees-add-page/employees-add-page.component';
import { EmployeesContentPageComponent } from './employees-page/employees-content-page/employees-content-page.component';

@NgModule({
    declarations: [
        HomePageComponent,
        DashboardPageComponent,
        InternsPageComponent,
        EmployeesPageComponent,
        InternsAddPageComponent,
        InternsContentPageComponent,
        EmployeesAddPageComponent,
        EmployeesContentPageComponent,
    ],
    imports: [
        SharedModule,
        RouterModule.forChild(PAGES_ROUTES)
    ],
    exports: [
    ],
    providers: []
})
export class PagesModule { }
