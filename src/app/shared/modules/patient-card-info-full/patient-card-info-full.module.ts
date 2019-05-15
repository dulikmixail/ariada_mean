import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PatientCardInfoFullComponent} from './patient-card-info-full/patient-card-info-full.component';
import {MatCardModule, MatChipsModule, MatFormFieldModule, MatInputModule} from '@angular/material';

@NgModule({
  declarations: [PatientCardInfoFullComponent],
  exports: [PatientCardInfoFullComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatChipsModule,
    MatInputModule,
    MatFormFieldModule
  ]
})
export class PatientCardInfoFullModule {
}
