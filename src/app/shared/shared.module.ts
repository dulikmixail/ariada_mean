import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PatientFormComponent} from './patient-form/patient-form.component';
import {PatientListComponent} from './patient-list/patient-list.component';
import {EmployeeFormComponent} from './employee-form/employee-form.component';
import {
  MatButtonModule,
  MatCardModule,
  MatDatepickerModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatMenuModule, MatNativeDateModule,
  MatSelectModule
} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BranchFormComponent } from './branch-form/branch-form.component';
import { PostFormComponent } from './post-form/post-form.component';

@NgModule({
  declarations: [
    PatientFormComponent,
    PatientListComponent,
    EmployeeFormComponent,
    BranchFormComponent,
    PostFormComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatMenuModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  exports: [
    PatientFormComponent,
    PatientListComponent,
    EmployeeFormComponent,
    BranchFormComponent,
    PostFormComponent
  ]
})
export class SharedModule {
}
