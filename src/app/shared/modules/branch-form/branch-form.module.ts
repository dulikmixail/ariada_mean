import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BranchFormComponent} from './branch-form/branch-form.component';
import {BaseTitleFormModule} from '../base-title-form/base-title-form.module';

@NgModule({
  declarations: [BranchFormComponent],
  exports: [BranchFormComponent],
  imports: [
    BaseTitleFormModule,
    CommonModule
  ]
})
export class BranchFormModule {
}
