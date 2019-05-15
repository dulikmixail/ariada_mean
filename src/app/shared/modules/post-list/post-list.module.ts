import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PostListComponent} from './post-list/post-list.component';
import {MatToolbarModule} from '@angular/material';
import {BaseTitleListModule} from '../base-title-list/base-title-list.module';

@NgModule({
  declarations: [PostListComponent],
  exports: [PostListComponent],
  imports: [
    BaseTitleListModule,
    CommonModule,
    MatToolbarModule
  ]
})
export class PostListModule {
}
