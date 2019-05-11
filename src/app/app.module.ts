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
  MatDialogModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule,
  MatMenuModule,
  MatFormFieldModule,
  MatProgressSpinnerModule,
  MatSelectModule,
  MatSnackBarModule,
  MAT_SNACK_BAR_DEFAULT_OPTIONS,
  MatPaginatorIntl
} from '@angular/material';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {TopNavigationComponent} from './shared/top-navigation/top-navigation.component';
import {JwtInterceptor, ErrorInterceptor} from './_helpers';
import {reducers, metaReducers} from './store';
import {PatientServiceEffects} from './store/services/patient-service/patient-service.effects';
import {GenderServiceEffects} from './store/services/gender-service/gender-service.effects';
import {PatientsNavLinkModule} from './patients/patients-nav-link.module';
import {ImageModalComponent} from './shared/image-modal/image-modal.component';
import {BranchServiceEffects} from './store/services/branch-service/branch-service.effects';
import {PostServiceEffects} from './store/services/post-service/post-service.effects';
import {EmployeeServiceEffects} from './store/services/employee-service/employee-service.effects';
import {environment} from '../environments/environment';
import {TestComponent} from './test/test.component';
import {SharedModule} from './shared/shared.module';
import {MatPaginatorIntlUk} from './matPaginatorIntlUk';
import {HistoryIncomingModule} from './shared/modules/history-incoming/history-incoming.module';

@NgModule({
  declarations: [
    AppComponent,
    ImageModalComponent,
    TopNavigationComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    HistoryIncomingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatDialogModule,
    MatSnackBarModule,
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
    EffectsModule.forRoot(
      [
        BranchServiceEffects,
        EmployeeServiceEffects,
        GenderServiceEffects,
        PatientServiceEffects,
        PostServiceEffects
      ]),
    StoreRouterConnectingModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true},
    {provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: {duration: environment.matSnackBar.duration}},
    {provide: MatPaginatorIntl, useValue: new MatPaginatorIntlUk},
  ],
  bootstrap: [
    AppComponent
  ],
  entryComponents: [
    ImageModalComponent
  ]
})
export class AppModule {
}
