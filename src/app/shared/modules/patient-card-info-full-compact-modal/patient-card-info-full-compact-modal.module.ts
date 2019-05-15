import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PatientCardInfoFullCompactModalComponent} from './patient-card-info-full-compact-modal/patient-card-info-full-compact-modal.component';

@NgModule({
  declarations: [PatientCardInfoFullCompactModalComponent],
  exports: [PatientCardInfoFullCompactModalComponent],
  imports: [
    CommonModule
  ]
})
export class PatientCardInfoFullCompactModalModule {
}
