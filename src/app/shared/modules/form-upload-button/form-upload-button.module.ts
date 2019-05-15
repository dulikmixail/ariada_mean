import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormUploadButtonComponent} from './form-upload-button/form-upload-button.component';
import {MatButtonModule, MatIconModule} from '@angular/material';

@NgModule({
  declarations: [FormUploadButtonComponent],
  exports: [FormUploadButtonComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule
  ]
})
export class FormUploadButtonModule {
}
