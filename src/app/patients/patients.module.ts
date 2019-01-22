import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {PatientsRoutingModule} from './patients-routing.module';
import {
  MatAutocompleteModule,
  MatButtonModule, MatChipsModule,
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
import {StepTwoComponent} from './anamnesis/step-two/step-two.component';
import {ChipsListComponent} from '../shared/chips-list/chips-list.component';

@NgModule({
  declarations: [
    PatientsComponent,
    AnamnesisComponent,
    RehabilitationComponent,
    StepOneComponent,
    StepTwoComponent,
    ChipsListComponent
  ],
  imports: [
    CommonModule,
    PatientsRoutingModule,
    RouterTabModule,
    MatTabsModule,
    MatStepperModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    ReactiveFormsModule,
    MatChipsModule,
    MatAutocompleteModule
  ],

  bootstrap: [
    PatientsComponent
  ]
})
export class PatientsModule {
}
