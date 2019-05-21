import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {PatientsRoutingModule} from './patients-routing.module';
import {AnamnesisComponent} from './anamnesis/anamnesis.component';
import {PatientsComponent} from './patients/patients.component';
import {RehabilitationComponent} from './rehabilitation/rehabilitation.component';
import {RouterTabModule} from '@zerohouse/router-tab';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
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
import {ProgressSpinnerModule} from '../shared/modules/progress-spinner/progress-spinner.module';
import {PatientSearchPanelModule} from '../shared/modules/patient-search-panel/patient-search-panel.module';
import {ChipsListModule} from '../shared/modules/chips-list/chips-list.module';
import {PatientCardInfoModule} from '../shared/modules/patient-card-info/patient-card-info.module';
import {PatientCardInfoFullCompactModule} from '../shared/modules/patient-card-info-full-compact/patient-card-info-full-compact.module';
import {MatButtonModule, MatFormFieldModule, MatOptionModule, MatSelectModule, MatStepperModule} from '@angular/material';
import {HistoryIncomingModule} from '../shared/modules/history-incoming/history-incoming.module';

@NgModule({
  declarations: [
    PatientsComponent,
    AnamnesisComponent,
    RehabilitationComponent,
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
    EmcPatientComponent,
  ],
  imports: [
    CommonModule,
    PatientsRoutingModule,
    RouterTabModule,
    ReactiveFormsModule,
    FormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatOptionModule,
    MatSelectModule,
    MatStepperModule,
    HistoryIncomingModule,
    ProgressSpinnerModule,
    PatientCardInfoModule,
    PatientCardInfoFullCompactModule,
    PatientSearchPanelModule,
    ChipsListModule
  ],
  bootstrap: [
    PatientsComponent
  ]
})
export class PatientsModule {
}
