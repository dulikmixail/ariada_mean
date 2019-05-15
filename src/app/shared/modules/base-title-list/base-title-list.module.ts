import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BaseTitleListComponent} from './base-title-list/base-title-list.component';
import {MatButtonModule, MatCardModule, MatIconModule, MatMenuModule} from '@angular/material';

@NgModule({
  declarations: [BaseTitleListComponent],
  exports: [BaseTitleListComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatMenuModule
  ]
})
export class BaseTitleListModule {
}
