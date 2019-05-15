import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PatientCardInfoFullCompactComponent} from './patient-card-info-full-compact/patient-card-info-full-compact.component';
import {MatCardModule} from '@angular/material';

@NgModule({
  declarations: [PatientCardInfoFullCompactComponent],
  exports: [PatientCardInfoFullCompactComponent],
  imports: [
    CommonModule,
    MatCardModule
  ]
})
export class PatientCardInfoFullCompactModule {
}
