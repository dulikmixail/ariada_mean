import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AdminPanelComponent} from './admin-panel.component';
import {PatientsComponent} from './patients/patients.component';
import {EmployeeFormComponent} from '../shared/employee-form/employee-form.component';

const routes: Routes = [
  {
    path: '', component: AdminPanelComponent,
    children: [
      {path: 'employees/new', component: EmployeeFormComponent},
      {path: 'patients', component: PatientsComponent},
      {path: 'branches/new', component: EmployeeFormComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminPanelRoutingModule {
}
