import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProgressSpinnerComponent} from './progress-spinner/progress-spinner.component';
import {MatProgressSpinnerModule} from '@angular/material';

@NgModule({
  declarations: [ProgressSpinnerComponent],
  exports: [ProgressSpinnerComponent],
  imports: [
    CommonModule,
    MatProgressSpinnerModule
  ]
})
export class ProgressSpinnerModule {
}
