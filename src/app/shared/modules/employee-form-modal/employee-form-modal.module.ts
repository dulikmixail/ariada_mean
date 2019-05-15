import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EmployeeFormModalComponent} from './employee-form-modal/employee-form-modal.component';
import {EmployeeFormModule} from '../employee-form/employee-form.module';

@NgModule({
  declarations: [EmployeeFormModalComponent],
  exports: [EmployeeFormModalComponent],
  imports: [
    CommonModule,
    EmployeeFormModule
  ]
})
export class EmployeeFormModalModule {
}
