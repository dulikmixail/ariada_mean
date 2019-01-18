import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AnamnesisComponent} from './anamnesis/anamnesis.component';
import {AuthGuard} from '../_guards';
import {PatientsComponent} from './patients.component';

const routes: Routes = [
  {
    path: '', component: PatientsComponent,
    children: [
      {path: '', pathMatch: 'full', redirectTo: 'anamnesis'},
      {path: 'anamnesis', component: AnamnesisComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PatientsRoutingModule {
}
