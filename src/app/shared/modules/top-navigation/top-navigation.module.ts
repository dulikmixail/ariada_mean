import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TopNavigationComponent} from './top-navigation/top-navigation.component';
import {MatButtonModule, MatIconModule, MatListModule, MatMenuModule, MatSidenavModule, MatToolbarModule} from '@angular/material';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [TopNavigationComponent],
  exports: [TopNavigationComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatMenuModule,
    MatSidenavModule,
    MatToolbarModule,
    RouterModule
  ]
})
export class TopNavigationModule {
}
