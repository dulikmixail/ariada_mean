import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PatientListComponent} from './patient-list/patient-list.component';
import {PatientSearchPanelModule} from '../patient-search-panel/patient-search-panel.module';
import {LoadingContainerModule} from '../loading-container/loading-container.module';
import {PatientCardModule} from '../patient-card/patient-card.module';
import {MatToolbarModule} from '@angular/material';

@NgModule({
  declarations: [PatientListComponent],
  exports: [PatientListComponent],
  imports: [
    CommonModule,
    LoadingContainerModule,
    PatientCardModule,
    PatientSearchPanelModule,
    MatToolbarModule
  ]
})
export class PatientListModule {
}
