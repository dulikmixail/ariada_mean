import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HistoryIncomingComponent} from './history-incoming.component';
import {MatDatepickerModule, MatFormFieldModule, MatInputModule} from '@angular/material';
import {ReactiveFormsModule} from '@angular/forms';
import {NgxMaterialTimepickerModule} from 'ngx-material-timepicker';

@NgModule({
  declarations: [HistoryIncomingComponent],
  exports: [
    HistoryIncomingComponent
  ],
  imports: [
    CommonModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    NgxMaterialTimepickerModule,
    ReactiveFormsModule
  ]
})
export class HistoryIncomingModule {
}
