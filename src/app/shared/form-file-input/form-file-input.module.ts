import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormFileInputComponent} from './form-file-input.component';

@NgModule({
  declarations: [FormFileInputComponent],
  imports: [
    CommonModule
  ],
  bootstrap: [FormFileInputComponent]
})
export class FormFileInputModule {
}
