import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PatientCardInfoComponent} from './patient-card-info/patient-card-info.component';
import {AvatarModule} from '../avatar/avatar.module';

@NgModule({
  declarations: [PatientCardInfoComponent],
  exports: [PatientCardInfoComponent],
  imports: [
    AvatarModule,
    CommonModule
  ]
})
export class PatientCardInfoModule {
}
