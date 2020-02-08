import { Routes } from '@angular/router';
import { AppComponent } from './app.component';

export const APP_ROUTES: Routes = [
  {
    path: '',
    loadChildren: './shared/layouts/layouts.module#LayoutsModule'
  }
]
