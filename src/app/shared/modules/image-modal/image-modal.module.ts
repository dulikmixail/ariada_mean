import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ImageModalComponent} from './image-modal/image-modal.component';
import {MatButtonModule, MatDialogModule} from '@angular/material';

@NgModule({
  declarations: [ImageModalComponent],
  exports: [ImageModalComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatDialogModule
  ]
})
export class ImageModalModule {
}
