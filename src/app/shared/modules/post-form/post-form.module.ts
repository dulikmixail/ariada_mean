import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PostFormComponent} from './post-form/post-form.component';
import {BaseTitleFormModule} from '../base-title-form/base-title-form.module';

@NgModule({
  declarations: [PostFormComponent],
  exports: [PostFormComponent],
  imports: [
    BaseTitleFormModule,
    CommonModule
  ]
})
export class PostFormModule {
}
