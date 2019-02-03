import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AnamnesisComponent} from './anamnesis/anamnesis.component';
import {PatientsComponent} from './patients.component';
import {RehabilitationComponent} from './rehabilitation/rehabilitation.component';
import {MassageComponent} from './rehabilitation/massage/massage.component';
import {SelfExercisesComponent} from './rehabilitation/self-exercises/self-exercises.component';
import {MedicalGymnasticsComponent} from './rehabilitation/medical-gymnastics/medical-gymnastics.component';
import {MorningGymnasticsComponent} from './rehabilitation/morning-gymnastics/morning-gymnastics.component';
import {MultimediaComponent} from './rehabilitation/multimedia/multimedia.component';
import {EfficiencyComponent} from './efficiency/efficiency.component';
import {RobinsonIndexComponent} from './efficiency/robinson-index/robinson-index.component';
import {KerdoIndexComponent} from './efficiency/kerdo-index/kerdo-index.component';
import {BaevskyTestComponent} from './efficiency/baevsky-test/baevsky-test.component';
import {SbpHrComponent} from './efficiency/sbp-hr/sbp-hr.component';
import {OrthostaticTestComponent} from './efficiency/orthostatic-test/orthostatic-test.component';
import {MartineKushelevskyTestComponent} from './efficiency/martine-kushelevsky-test/martine-kushelevsky-test.component';
import {PhysicalCapacityComponent} from './efficiency/physical-capacity/physical-capacity.component';
import {RuffieTestComponent} from './efficiency/ruffie-test/ruffie-test.component';
import {ApanasenkoTestComponent} from './efficiency/apanasenko-test/apanasenko-test.component';
import {SkibinskayaIndexComponent} from './efficiency/skibinskaya-index/skibinskaya-index.component';
import {KlabchukIndexComponent} from './efficiency/klabchuk-index/klabchuk-index.component';

const routes: Routes = [
  {
    path: '', component: PatientsComponent,
    children: [
      {path: 'anamnesis', component: AnamnesisComponent},
      {
        path: 'rehabilitation', component: RehabilitationComponent,
        children: [
          {path: 'massage', component: MassageComponent},
          {path: 'self-exercises', component: SelfExercisesComponent},
          {path: 'medical-gymnastics', component: MedicalGymnasticsComponent},
          {path: 'morning-gymnastics', component: MorningGymnasticsComponent},
          {path: 'multimedia', component: MultimediaComponent}
        ]
      },
      {
        path: 'efficiency', component: EfficiencyComponent,
        children: [
          {path: 'robinson-index', component: RobinsonIndexComponent},
          {path: 'kerdo-index', component: KerdoIndexComponent},
          {path: 'baevsky-test', component: BaevskyTestComponent},
          {path: 'sbp-hr', component: SbpHrComponent},
          {path: 'orthostatic-test', component: OrthostaticTestComponent},
          {path: 'physical-capacity', component: PhysicalCapacityComponent},
          {path: 'martine-kushelevsky-test', component: MartineKushelevskyTestComponent},
          {path: 'ruffie-test', component: RuffieTestComponent},
          {path: 'apanasenko-test', component: ApanasenkoTestComponent},
          {path: 'skibinskaya-index', component: SkibinskayaIndexComponent},
          {path: 'klabchuk-index', component: KlabchukIndexComponent}
        ]
      },
      {path: '', pathMatch: 'full', redirectTo: 'anamnesis'},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PatientsRoutingModule {
}
