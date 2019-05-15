import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BranchListComponent} from './branch-list/branch-list.component';
import {BaseTitleListModule} from '../base-title-list/base-title-list.module';
import {MatToolbarModule} from '@angular/material';

@NgModule({
  declarations: [BranchListComponent],
  exports: [BranchListComponent],
  imports: [
    BaseTitleListModule,
    CommonModule,
    MatToolbarModule
  ]
})
export class BranchListModule {
}
