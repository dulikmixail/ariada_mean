import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';

import {StoreModule} from '@ngrx/store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {StoreRouterConnectingModule} from '@ngrx/router-store';
import {EffectsModule} from '@ngrx/effects';

import {MAT_SNACK_BAR_DEFAULT_OPTIONS, MatNativeDateModule, MatPaginatorIntl, MatSnackBarModule} from '@angular/material';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ErrorInterceptor, JwtInterceptor} from './_helpers';
import {metaReducers, reducers} from './store';
import {PatientServiceEffects} from './store/services/patient-service/patient-service.effects';
import {GenderServiceEffects} from './store/services/gender-service/gender-service.effects';
import {PatientsNavLinkModule} from './patients/patients-nav-link.module';
import {BranchServiceEffects} from './store/services/branch-service/branch-service.effects';
import {PostServiceEffects} from './store/services/post-service/post-service.effects';
import {EmployeeServiceEffects} from './store/services/employee-service/employee-service.effects';
import {environment} from '../environments/environment';
import {MatPaginatorIntlUk} from './matPaginatorIntlUk';
import {HistoryIncomingFormModule} from './shared/modules/history-incoming-form/history-incoming-form.module';
import {HistoryIncomingServiceEffects} from './store/services/history-incoming-service/history-incoming-service.effects';
import {HowIncomingServiceEffects} from './store/services/how-incoming-service/how-incoming-service.effects';
import {TopNavigationModule} from './shared/modules/top-navigation/top-navigation.module';
import {TestModule} from './test/test.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    !environment.production ? StoreDevtoolsModule.instrument({maxAge: 50}) : [],
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    HistoryIncomingFormModule,
    HttpClientModule,
    MatNativeDateModule,
    MatSnackBarModule,
    PatientsNavLinkModule,
    StoreModule.forRoot(reducers, {metaReducers}),
    TopNavigationModule,
    EffectsModule.forRoot(
      [
        BranchServiceEffects,
        EmployeeServiceEffects,
        GenderServiceEffects,
        PatientServiceEffects,
        PostServiceEffects,
        HistoryIncomingServiceEffects,
        HowIncomingServiceEffects
      ]),
    StoreRouterConnectingModule,

    TestModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true},
    {provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: {duration: environment.matSnackBar.duration}},
    {provide: MatPaginatorIntl, useValue: new MatPaginatorIntlUk},
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {
}
