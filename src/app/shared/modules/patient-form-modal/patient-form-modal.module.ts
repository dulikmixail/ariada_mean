import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PatientFormModalComponent} from './patient-form-modal/patient-form-modal.component';
import {PatientFormModule} from '../patient-form/patient-form.module';

@NgModule({
  declarations: [PatientFormModalComponent],
  exports: [PatientFormModalComponent],
  imports: [
    CommonModule,
    PatientFormModule
  ]
})
export class PatientFormModalModule {
}
