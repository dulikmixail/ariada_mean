import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BaseTitleFormComponent} from './base-title-form/base-title-form.component';
import {MatCardModule, MatFormFieldModule, MatInputModule} from '@angular/material';
import {ReactiveFormsModule} from '@angular/forms';
import {FormCardActionsModule} from '../form-card-actions/form-card-actions.module';

@NgModule({
  declarations: [BaseTitleFormComponent],
  exports: [BaseTitleFormComponent],
  imports: [
    CommonModule,
    FormCardActionsModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
  ]
})
export class BaseTitleFormModule {
}
