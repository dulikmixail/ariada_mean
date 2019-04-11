import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {PatientsRoutingModule} from './patients-routing.module';
import {
  MatAutocompleteModule,
  MatButtonModule,
  MatChipsModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatProgressSpinnerModule,
  MatSelectModule,
  MatStepperModule,
  MatTabsModule
} from '@angular/material';
import {AnamnesisComponent} from './anamnesis/anamnesis.component';
import {PatientsComponent} from './patients.component';
import {RehabilitationComponent} from './rehabilitation/rehabilitation.component';
import {RouterTabModule} from '@zerohouse/router-tab';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ChipsListComponent} from '../shared/chips-list/chips-list.component';
import {ProgressSpinnerComponent} from '../shared/progress-spinner/progress-spinner.component';
import {MassageComponent} from './rehabilitation/massage/massage.component';
import {MedicalGymnasticsComponent} from './rehabilitation/medical-gymnastics/medical-gymnastics.component';
import {MorningGymnasticsComponent} from './rehabilitation/morning-gymnastics/morning-gymnastics.component';
import {MultimediaComponent} from './rehabilitation/multimedia/multimedia.component';
import {SelfExercisesComponent} from './rehabilitation/self-exercises/self-exercises.component';
import {EfficiencyComponent} from './efficiency/efficiency.component';
import {ApanasenkoTestComponent} from './efficiency/apanasenko-test/apanasenko-test.component';
import {BaevskyTestComponent} from './efficiency/baevsky-test/baevsky-test.component';
import {KerdoIndexComponent} from './efficiency/kerdo-index/kerdo-index.component';
import {KlabchukIndexComponent} from './efficiency/klabchuk-index/klabchuk-index.component';
import {MartineKushelevskyTestComponent} from './efficiency/martine-kushelevsky-test/martine-kushelevsky-test.component';
import {OrthostaticTestComponent} from './efficiency/orthostatic-test/orthostatic-test.component';
import {PhysicalCapacityComponent} from './efficiency/physical-capacity/physical-capacity.component';
import {RobinsonIndexComponent} from './efficiency/robinson-index/robinson-index.component';
import {RuffieTestComponent} from './efficiency/ruffie-test/ruffie-test.component';
import {SbpHrComponent} from './efficiency/sbp-hr/sbp-hr.component';
import {SkibinskayaIndexComponent} from './efficiency/skibinskaya-index/skibinskaya-index.component';
import {EmcPatientComponent} from './emc-patient/emc-patient.component';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  declarations: [
    PatientsComponent,
    AnamnesisComponent,
    RehabilitationComponent,
    ChipsListComponent,
    ProgressSpinnerComponent,
    MassageComponent,
    MedicalGymnasticsComponent,
    MorningGymnasticsComponent,
    MultimediaComponent,
    SelfExercisesComponent,
    EfficiencyComponent,
    ApanasenkoTestComponent,
    BaevskyTestComponent,
    KerdoIndexComponent,
    KlabchukIndexComponent,
    MartineKushelevskyTestComponent,
    OrthostaticTestComponent,
    PhysicalCapacityComponent,
    RobinsonIndexComponent,
    RuffieTestComponent,
    SbpHrComponent,
    SkibinskayaIndexComponent,
    EmcPatientComponent
  ],
  imports: [
    CommonModule,
    PatientsRoutingModule,
    RouterTabModule,
    ReactiveFormsModule,
    FormsModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatChipsModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatProgressSpinnerModule,
    MatSelectModule,
    MatStepperModule,
    MatTabsModule,
    SharedModule,
  ],

  bootstrap: [
    PatientsComponent
  ]
})
export class PatientsModule {
}
