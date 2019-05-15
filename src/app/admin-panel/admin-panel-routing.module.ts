import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AdminPanelComponent} from './admin-panel.component';
import {EmployeeFormComponent} from '../shared/modules/employee-form/employee-form/employee-form.component';
import {PatientFormComponent} from '../shared/modules/patient-form/patient-form/patient-form.component';
import {PatientListComponent} from '../shared/modules/patient-list/patient-list/patient-list.component';
import {BranchFormComponent} from '../shared/modules/branch-form/branch-form/branch-form.component';
import {PostFormComponent} from '../shared/modules/post-form/post-form/post-form.component';
import {BranchListComponent} from '../shared/modules/branch-list/branch-list/branch-list.component';
import {EmployeeListComponent} from '../shared/modules/employee-list/employee-list/employee-list.component';
import {PostListComponent} from '../shared/modules/post-list/post-list/post-list.component';

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
      {path: 'posts/new', component: PostFormComponent},
      {path: 'posts/search', component: PostListComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminPanelRoutingModule {
}
