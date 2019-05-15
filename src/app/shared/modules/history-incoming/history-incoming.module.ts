import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HistoryIncomingComponent} from './history-incoming/history-incoming.component';
import {
  MatButtonModule,
  MatCardModule,
  MatDatepickerModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatSelectModule
} from '@angular/material';
import {ReactiveFormsModule} from '@angular/forms';
import {NgxMaterialTimepickerModule} from 'ngx-material-timepicker';
import {HistoryIncomingFormComponent} from './history-incoming-form/history-incoming-form.component';

@NgModule({
  declarations: [
    HistoryIncomingComponent,
    HistoryIncomingFormComponent
  ],
  exports: [
    HistoryIncomingComponent,
    HistoryIncomingFormComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatDatepickerModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatCardModule,
    NgxMaterialTimepickerModule,
    ReactiveFormsModule
  ]
})
export class HistoryIncomingModule {
}
