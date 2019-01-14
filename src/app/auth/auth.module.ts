import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AuthRoutingModule} from './auth-routing.module';
import {SignInComponent} from './sign-in/sign-in.component';
import {MatCardModule} from '@angular/material/card';
import {ReactiveFormsModule} from '@angular/forms';
import {MatButtonModule, MatInputModule} from '@angular/material';

@NgModule({
  declarations: [
    SignInComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    MatCardModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule
  ]
})
export class AuthModule {
}
