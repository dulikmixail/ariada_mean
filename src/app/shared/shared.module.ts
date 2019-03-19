import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PatientFormComponent} from './patient-form/patient-form.component';
import {PatientListComponent} from './patient-list/patient-list.component';
import {EmployeeFormComponent} from './employee-form/employee-form.component';
import {
  MatButtonModule,
  MatCardModule,
  MatDatepickerModule,
  MatExpansionModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatMenuModule,
  MatNativeDateModule,
  MatRippleModule,
  MatSelectModule,
  MatToolbarModule
} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BranchFormComponent} from './branch-form/branch-form.component';
import {PostFormComponent} from './post-form/post-form.component';
import {BranchListComponent} from './branch-list/branch-list.component';
import {EmployeeListComponent} from './employee-list/employee-list.component';
import {FormCardActionsComponent} from './form-card-actions/form-card-actions.component';
import { FormUploadButtonComponent } from './form-upload-button/form-upload-button.component';

@NgModule({
  declarations: [
    PatientFormComponent,
    PatientListComponent,
    EmployeeFormComponent,
    BranchFormComponent,
    PostFormComponent,
    BranchListComponent,
    EmployeeListComponent,
    FormCardActionsComponent,
    FormUploadButtonComponent
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
    MatToolbarModule,
    MatExpansionModule,
    MatRippleModule,
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
