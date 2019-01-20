import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {PatientsRoutingModule} from './patients-routing.module';
import {
  MatAutocompleteModule,
  MatButtonModule,
  MatChipsModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatStepperModule,
  MatTabsModule
} from '@angular/material';
import {AnamnesisComponent} from './anamnesis/anamnesis.component';
import {PatientsComponent} from './patients.component';
import {RehabilitationComponent} from './rehabilitation/rehabilitation.component';
import {RouterTabModule} from '@zerohouse/router-tab';
import {ReactiveFormsModule} from '@angular/forms';
import {StepOneComponent} from './anamnesis/step-one/step-one.component';

@NgModule({
  declarations: [
    PatientsComponent,
    AnamnesisComponent,
    RehabilitationComponent,
    StepOneComponent,
  ],
  imports: [
    CommonModule,
    PatientsRoutingModule,
    RouterTabModule,
    MatTabsModule,
    MatStepperModule,
    MatFormFieldModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatChipsModule,
    MatAutocompleteModule,
    ReactiveFormsModule
  ],
  bootstrap: [
    PatientsComponent
  ]
})
export class PatientsModule {
}
