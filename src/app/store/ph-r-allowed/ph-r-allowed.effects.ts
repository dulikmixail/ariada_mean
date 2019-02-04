import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';



import { PhRAllowedActionTypes } from './ph-r-allowed.actions';

@Injectable()
export class PhRAllowedEffects {


  @Effect()
  loadPhRAlloweds$ = this.actions$.pipe(ofType(PhRAllowedActionTypes.LoadPhRAlloweds));


  constructor(private actions$: Actions) {}

}
