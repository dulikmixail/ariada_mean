import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AvatarComponent} from './';

@NgModule({
  declarations: [AvatarComponent],
  exports: [AvatarComponent],
  imports: [
    CommonModule
  ]
})
export class AvatarModule {
}
