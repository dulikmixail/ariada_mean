import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {LayoutModule} from '@angular/cdk/layout';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';

import {StoreModule} from '@ngrx/store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {StoreRouterConnectingModule} from '@ngrx/router-store';
import {EffectsModule} from '@ngrx/effects';

import {
  MatToolbarModule,
  MatButtonModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule,
  MatMenuModule,
  MatFormFieldModule,
  MatProgressSpinnerModule, MatSelectModule
} from '@angular/material';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {TopNavigationComponent} from './shared/top-navigation/top-navigation.component';
import {JwtInterceptor, ErrorInterceptor} from './_helpers';
import {reducers, metaReducers} from './store';
import {environment} from '../environments/environment';
import {PatientServiceEffects} from './store/services/patient-service/patient-service.effects';
import {GenderServiceEffects} from './store/services/gender-service/gender-service.effects';
import {PatientsNavLinkModule} from './patients/patients-nav-link.module';

@NgModule({
  declarations: [
    AppComponent,
    TopNavigationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSelectModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatMenuModule,
    MatFormFieldModule,
    MatProgressSpinnerModule,
    PatientsNavLinkModule,
    StoreModule.forRoot(reducers, {metaReducers}),
    !environment.production ? StoreDevtoolsModule.instrument({maxAge: 50}) : [],
    EffectsModule.forRoot([PatientServiceEffects, GenderServiceEffects]),
    StoreRouterConnectingModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true},
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
