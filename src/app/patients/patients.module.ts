import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {PatientsRoutingModule} from './patients-routing.module';
import {MatTabsModule} from '@angular/material';
import {AnamnesisComponent} from './anamnesis/anamnesis.component';
import {PatientsComponent} from './patients.component';
import { RehabilitationComponent } from './rehabilitation/rehabilitation.component';
import {RouterTabModule} from '@zerohouse/router-tab';

@NgModule({
  declarations: [
    PatientsComponent,
    AnamnesisComponent,
    RehabilitationComponent
  ],
  imports: [
    CommonModule,
    PatientsRoutingModule,
    MatTabsModule,
    RouterTabModule
  ],
  bootstrap: [
    PatientsComponent
  ]
})
export class PatientsModule {
}
