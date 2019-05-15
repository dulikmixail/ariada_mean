import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CloseButtonComponent} from './close-button/close-button.component';
import {MatButtonModule} from '@angular/material';

@NgModule({
  declarations: [CloseButtonComponent],
  exports: [CloseButtonComponent],
  imports: [
    CommonModule,
    MatButtonModule
  ]
})
export class CloseButtonModule {
}
