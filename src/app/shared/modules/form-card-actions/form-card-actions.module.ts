import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormCardActionsComponent} from './form-card-actions/form-card-actions.component';
import {MatButtonModule, MatCardModule} from '@angular/material';

@NgModule({
  declarations: [FormCardActionsComponent],
  exports: [FormCardActionsComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule
  ]
})
export class FormCardActionsModule {
}
