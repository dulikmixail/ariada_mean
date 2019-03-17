import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AdminPanelComponent} from './admin-panel.component';
import {EmployeeFormComponent} from '../shared/employee-form/employee-form.component';
import {PatientFormComponent} from '../shared/patient-form/patient-form.component';
import {PatientListComponent} from '../shared/patient-list/patient-list.component';
import {BranchFormComponent} from '../shared/branch-form/branch-form.component';
import {PostFormComponent} from '../shared/post-form/post-form.component';
import {BranchListComponent} from '../shared/branch-list/branch-list.component';
import {EmployeeListComponent} from '../shared/employee-list/employee-list.component';

const routes: Routes = [
  {
    path: '', component: AdminPanelComponent,
    children: [
      {path: 'employees/new', component: EmployeeFormComponent},
      {path: 'employees/search', component: EmployeeListComponent},
      {path: 'patients/new', component: PatientFormComponent},
      {path: 'patients/search', component: PatientListComponent},
      {path: 'branches/new', component: BranchFormComponent},
      {path: 'branches/search', component: BranchListComponent},
      {path: 'posts/new', component: PostFormComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminPanelRoutingModule {
}
