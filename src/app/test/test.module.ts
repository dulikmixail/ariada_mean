import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TestComponent} from './test/test.component';
import {PlacementFormModule} from '../shared/modules/placement-form/placement-form.module';
import {HistoryIncomingFormModule} from '../shared/modules/history-incoming-form/history-incoming-form.module';

@NgModule({
  declarations: [
    TestComponent
  ],
  imports: [
    CommonModule,
    PlacementFormModule,
    HistoryIncomingFormModule
  ]
})
export class TestModule {
}
