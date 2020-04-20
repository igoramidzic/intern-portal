import { Routes } from '@angular/router';

export const APP_ROUTES: Routes = [
  {
    path: '',
    loadChildren: './shared/layouts/layouts.module#LayoutsModule'
  }
]
