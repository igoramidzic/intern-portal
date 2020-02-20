import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { HomePageComponent } from './home-page/home-page.component';
import { PAGES_ROUTES } from './pages.routes';
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';

@NgModule({
    declarations: [
        HomePageComponent,
        DashboardPageComponent,
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
