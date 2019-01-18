import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AuthGuard} from './_guards';
import {PatientsComponent} from './patients/patients.component';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: './login/login.module#LoginModule'
  },
  {
    path: 'patients',
    loadChildren: './patients/patients.module#PatientsModule',
    canActivate: [AuthGuard],
  },
  {
    path: '',
    redirectTo: '/patients',
    pathMatch: 'full'
  },
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
