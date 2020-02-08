import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { APP_ROUTES } from './app.routes';
import { JwtModule } from '@auth0/angular-jwt';
import { RouterModule } from '@angular/router';
import { environment } from 'src/environments/environment';
import { HttpClientModule } from '@angular/common/http';

export function tokenGetter() {
  return localStorage.getItem('access_token');
}

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(APP_ROUTES, { scrollPositionRestoration: 'enabled' }),
    JwtModule.forRoot({
      config: {
        tokenGetter,
        whitelistedDomains: [environment.baseUrl],
        throwNoTokenError: false,
        skipWhenExpired: true
      }
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
