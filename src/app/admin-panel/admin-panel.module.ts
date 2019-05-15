import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AdminPanelRoutingModule} from './admin-panel-routing.module';
import {AdminPanelComponent} from './admin-panel.component';
import {
  MatButtonModule,
  MatExpansionModule,
  MatIconModule,
  MatMenuModule,
  MatSidenavModule,
} from '@angular/material';
import {EmployeesComponent} from './employees/employees.component';
import {PatientsComponent} from './patients/patients.component';
import {EmployeeListModule} from '../shared/modules/employee-list/employee-list.module';
import {PatientListModule} from '../shared/modules/patient-list/patient-list.module';
import {EmployeeFormModule} from '../shared/modules/employee-form/employee-form.module';
import {PatientFormModule} from '../shared/modules/patient-form/patient-form.module';
import {BranchFormModule} from '../shared/modules/branch-form/branch-form.module';
import {BranchListModule} from '../shared/modules/branch-list/branch-list.module';
import {PostFormModule} from '../shared/modules/post-form/post-form.module';
import {PostListModule} from '../shared/modules/post-list/post-list.module';

@NgModule({
  declarations: [
    AdminPanelComponent,
    EmployeesComponent,
    PatientsComponent,
  ],
  imports: [
    CommonModule,
    AdminPanelRoutingModule,
    BranchListModule,
    BranchFormModule,
    EmployeeListModule,
    EmployeeFormModule,
    MatButtonModule,
    MatExpansionModule,
    MatIconModule,
    MatMenuModule,
    MatSidenavModule,
    PatientListModule,
    PatientFormModule,
    PostFormModule,
    PostListModule
  ],
  bootstrap: [
    AdminPanelComponent
  ]
})
export class AdminPanelModule {
}
