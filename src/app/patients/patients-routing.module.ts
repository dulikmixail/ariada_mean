import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AnamnesisComponent} from './anamnesis/anamnesis.component';
import {PatientsComponent} from './patients.component';

const routes: Routes = [
  {
    path: '', component: PatientsComponent,
    children: [
      {path: 'anamnesis', component: AnamnesisComponent},
      {path: '', pathMatch: 'full', redirectTo: 'anamnesis'},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PatientsRoutingModule {
}
