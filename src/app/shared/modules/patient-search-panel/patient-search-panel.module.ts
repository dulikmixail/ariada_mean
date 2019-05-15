import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PatientSearchPanelComponent} from './patient-search-panel/patient-search-panel.component';
import {SearchPanelModule} from '../search-panel/search-panel.module';

@NgModule({
  declarations: [PatientSearchPanelComponent],
  exports: [PatientSearchPanelComponent],
  imports: [
    CommonModule,
    SearchPanelModule
  ]
})
export class PatientSearchPanelModule {
}
