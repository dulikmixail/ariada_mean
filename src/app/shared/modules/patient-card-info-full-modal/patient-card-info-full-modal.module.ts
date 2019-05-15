import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PatientCardInfoFullModalComponent} from './patient-card-info-full-modal/patient-card-info-full-modal.component';
import {PatientCardInfoFullModule} from '../patient-card-info-full/patient-card-info-full.module';
import {CloseButtonModule} from '../close-button/close-button.module';

@NgModule({
  declarations: [PatientCardInfoFullModalComponent],
  exports: [PatientCardInfoFullModalComponent],
  imports: [
    CommonModule,
    CloseButtonModule,
    PatientCardInfoFullModule
  ]
})
export class PatientCardInfoFullModalModule {
}
