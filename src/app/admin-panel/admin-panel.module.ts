import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AdminPanelRoutingModule} from './admin-panel-routing.module';
import {AdminPanelComponent} from './admin-panel.component';
import {
  MatButtonModule,
  MatExpansionModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatSidenavModule,
} from '@angular/material';
import { EmployeesComponent } from './employees/employees.component';
import { PatientsComponent } from './patients/patients.component';

@NgModule({
  declarations: [AdminPanelComponent, EmployeesComponent, PatientsComponent],
  imports: [
    CommonModule,
    AdminPanelRoutingModule,
    MatButtonModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatSidenavModule
  ],
  bootstrap: [
    AdminPanelComponent
  ]
})
export class AdminPanelModule {
}
