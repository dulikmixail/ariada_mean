import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PlacementFormComponent} from './placement-form/placement-form.component';
import {MatFormFieldModule, MatInputModule, MatSelectModule} from '@angular/material';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [PlacementFormComponent],
  exports: [
    PlacementFormComponent
  ],
  imports: [
    CommonModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    ReactiveFormsModule
  ]
})
export class PlacementFormModule {
}
