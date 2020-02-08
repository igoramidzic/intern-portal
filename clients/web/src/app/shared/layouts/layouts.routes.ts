import { Routes } from '@angular/router';
import { ConnectLayoutComponent } from './connect-layout/connect-layout.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { CompanyConnectLayoutComponent } from './connect-layout/company-connect-layout/company-connect-layout.component';
import { InternConnectLayoutComponent } from './connect-layout/intern-connect-layout/intern-connect-layout.component';

export const LAYOUTS_ROUTES: Routes = [
    {
        path: '',
        component: MainLayoutComponent,
        loadChildren: '../../pages/pages.module#PagesModule'
    },
    {
        path: 'connect',
        component: ConnectLayoutComponent,
        children: [
            {
                path: 'company',
                component: CompanyConnectLayoutComponent
            },
            {
                path: 'intern',
                component: InternConnectLayoutComponent
            }
        ]
    }
]
