import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AdminPanelComponent} from './admin-panel.component';
import {EmployeesComponent} from './employees/employees.component';
import {PatientsComponent} from './patients/patients.component';

const routes: Routes = [
  {
    path: '', component: AdminPanelComponent,
    children: [
      {path: 'employees', component: EmployeesComponent},
      {path: 'patients', component: PatientsComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminPanelRoutingModule {
}
