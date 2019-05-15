import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EmployeeListComponent} from './employee-list/employee-list.component';
import {
  MatButtonModule,
  MatCardModule,
  MatIconModule,
  MatMenuModule,
  MatPaginatorModule,
  MatRippleModule,
  MatToolbarModule
} from '@angular/material';
import {LoadingContainerModule} from '../loading-container/loading-container.module';

@NgModule({
  declarations: [EmployeeListComponent],
  exports: [EmployeeListComponent],
  imports: [
    CommonModule,
    LoadingContainerModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatMenuModule,
    MatPaginatorModule,
    MatRippleModule,
    MatToolbarModule
  ]
})
export class EmployeeListModule {
}
