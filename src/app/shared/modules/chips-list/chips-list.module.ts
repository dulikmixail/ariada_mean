import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ChipsListComponent} from './chips-list/chips-list.component';
import {MatAutocompleteModule, MatChipsModule, MatFormFieldModule, MatIconModule, MatInputModule} from '@angular/material';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [ChipsListComponent],
  exports: [ChipsListComponent],
  imports: [
    CommonModule,
    MatAutocompleteModule,
    MatChipsModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule
  ]
})
export class ChipsListModule {
}
