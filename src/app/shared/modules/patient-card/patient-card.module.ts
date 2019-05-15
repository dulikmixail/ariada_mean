import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PatientCardComponent} from './patient-card/patient-card.component';
import {MatButtonModule, MatCardModule, MatIconModule, MatMenuModule, MatRippleModule} from '@angular/material';

@NgModule({
  declarations: [PatientCardComponent],
  exports: [PatientCardComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatMenuModule,
    MatRippleModule
  ]
})
export class PatientCardModule {
}
