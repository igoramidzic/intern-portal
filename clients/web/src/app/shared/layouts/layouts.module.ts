import { NgModule } from '@angular/core';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { RouterModule } from '@angular/router';
import { LAYOUTS_ROUTES } from './layouts.routes';
import { SharedModule } from '../shared.module';
import { ConnectLayoutComponent } from './connect-layout/connect-layout.component';
import { CompanyConnectLayoutComponent } from './connect-layout/company-connect-layout/company-connect-layout.component';
import { InternConnectLayoutComponent } from './connect-layout/intern-connect-layout/intern-connect-layout.component';
import { NotFoundLayoutComponent } from './not-found-layout/not-found-layout.component';

@NgModule({
    declarations: [
        MainLayoutComponent,
        ConnectLayoutComponent,
        CompanyConnectLayoutComponent,
        InternConnectLayoutComponent,
        NotFoundLayoutComponent
    ],
    imports: [
        SharedModule,
        RouterModule.forChild(LAYOUTS_ROUTES)
    ],
    exports: [
    ],
    providers: []
})
export class LayoutsModule { }
