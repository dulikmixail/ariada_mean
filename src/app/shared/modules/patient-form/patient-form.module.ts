import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PatientFormComponent} from './patient-form/patient-form.component';
import {
  MatCardModule,
  MatChipsModule,
  MatDatepickerModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatSelectModule
} from '@angular/material';
import {ReactiveFormsModule} from '@angular/forms';
import {FormUploadButtonModule} from '../form-upload-button/form-upload-button.module';
import {FormCardActionsModule} from '../form-card-actions/form-card-actions.module';

@NgModule({
  declarations: [PatientFormComponent],
  exports: [PatientFormComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatChipsModule,
    MatDatepickerModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    ReactiveFormsModule,
    FormCardActionsModule,
    FormUploadButtonModule
  ]
})
export class PatientFormModule {
}
