import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SearchPanelComponent} from './search-panel/search-panel.component';
import {SearchFormModule} from '../search-form/search-form.module';
import {MatPaginatorModule} from '@angular/material';

@NgModule({
  declarations: [
    SearchPanelComponent
  ],
  exports: [
    SearchPanelComponent
  ],
  imports: [
    CommonModule,
    SearchFormModule,
    MatPaginatorModule
  ]
})
export class SearchPanelModule {
}
