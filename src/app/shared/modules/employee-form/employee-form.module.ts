import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EmployeeFormComponent} from './employee-form/employee-form.component';
import {MatCardModule, MatDatepickerModule, MatFormFieldModule, MatInputModule, MatSelectModule} from '@angular/material';
import {ReactiveFormsModule} from '@angular/forms';
import {FormCardActionsModule} from '../form-card-actions/form-card-actions.module';
import {FormUploadButtonModule} from '../form-upload-button/form-upload-button.module';

@NgModule({
  declarations: [EmployeeFormComponent],
  exports: [EmployeeFormComponent],
  imports: [
    CommonModule,
    FormCardActionsModule,
    FormUploadButtonModule,
    MatCardModule,
    MatDatepickerModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    ReactiveFormsModule
  ]
})
export class EmployeeFormModule {
}
