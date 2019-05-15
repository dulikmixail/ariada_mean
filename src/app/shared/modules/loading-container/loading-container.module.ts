import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoadingContainerComponent} from './loading-container/loading-container.component';
import {ProgressSpinnerModule} from '../progress-spinner/progress-spinner.module';

@NgModule({
  declarations: [
    LoadingContainerComponent
  ],
  exports: [
    LoadingContainerComponent
  ],
  imports: [
    CommonModule,
    ProgressSpinnerModule
  ]
})
export class LoadingContainerModule {
}
