import { Routes } from '@angular/router';
import { ConnectLayoutComponent } from './connect-layout/connect-layout.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { CompanyConnectLayoutComponent } from './connect-layout/company-connect-layout/company-connect-layout.component';
import { InternConnectLayoutComponent } from './connect-layout/intern-connect-layout/intern-connect-layout.component';
import { AuthGuard } from 'src/app/core/guards/auth/auth.guard';
import { NotAuthGuard } from 'src/app/core/guards/not-auth/not-auth.guard';
import { CompanySignupComponent } from '../components/connect/company/company-signup/company-signup.component';
import { CompanyLoginComponent } from '../components/connect/company/company-login/company-login.component';
import { InternLoginComponent } from '../components/connect/intern/intern-login/intern-login.component';
import { NotFoundLayoutComponent } from './not-found-layout/not-found-layout.component';

export const LAYOUTS_ROUTES: Routes = [
    {
        path: '',
        canActivate: [AuthGuard],
        component: MainLayoutComponent,
        loadChildren: '../../pages/pages.module#PagesModule'
    },
    {
        path: 'connect',
        canActivate: [NotAuthGuard],
        component: ConnectLayoutComponent,
        children: [
            {
                path: 'company',
                component: CompanyConnectLayoutComponent,
                children: [
                    {
                        path: 'signup',
                        component: CompanySignupComponent
                    },
                    {
                        path: 'login',
                        component: CompanyLoginComponent
                    }
                ]
            },
            {
                path: 'intern',
                component: InternConnectLayoutComponent,
                children: [
                    {
                        path: 'login',
                        component: InternLoginComponent
                    }
                ]
            }
        ]
    },
    {
        path: '**',
        component: NotFoundLayoutComponent
    }
]
