import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AdminPanelRoutingModule} from './admin-panel-routing.module';
import {AdminPanelComponent} from './admin-panel.component';
import {
  MatButtonModule, MatCardModule, MatDatepickerModule,
  MatExpansionModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule, MatMenuModule, MatNativeDateModule,
  MatSelectModule,
  MatSidenavModule,
} from '@angular/material';
import {EmployeesComponent} from './employees/employees.component';
import {PatientsComponent} from './patients/patients.component';
import {EmployeeFormComponent} from '../shared/employee-form/employee-form.component';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AdminPanelComponent,
    EmployeesComponent,
    EmployeeFormComponent,
    PatientsComponent,
  ],
  imports: [
    CommonModule,
    AdminPanelRoutingModule,
    MatButtonModule,
    MatCardModule,
    MatDatepickerModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatMenuModule,
    MatNativeDateModule,
    MatSelectModule,
    MatSidenavModule,
    ReactiveFormsModule
  ],
  bootstrap: [
    AdminPanelComponent
  ]
})
export class AdminPanelModule {
}
