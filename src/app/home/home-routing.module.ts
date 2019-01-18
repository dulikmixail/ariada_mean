import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './home.component';
import {AuthGuard} from '../_guards';

const routes: Routes = [
  {
    path: '', component: HomeComponent,
    children: [
      {
        path: 'login',
        loadChildren: '../login/login.module#LoginModule'
      },
      {
        path: 'patients',
        loadChildren: '../patients/patients.module#PatientsModule',
        canActivate: [AuthGuard],
      },
      {
        path: '',
        redirectTo: '/patients',
        pathMatch: 'full'
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {
}
