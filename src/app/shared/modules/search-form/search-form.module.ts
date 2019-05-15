import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SearchFormComponent} from './search-form/search-form.component';
import {MatFormFieldModule, MatIconModule, MatInputModule} from '@angular/material';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    SearchFormComponent
  ],
  exports: [
    SearchFormComponent
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    ReactiveFormsModule
  ]
})
export class SearchFormModule {
}
