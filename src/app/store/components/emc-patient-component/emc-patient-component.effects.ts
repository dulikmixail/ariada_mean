import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';


import {EmcPatientComponentActionTypes} from './emc-patient-component.actions';

@Injectable()
export class EmcPatientComponentEffects {


  @Effect()
  loadEmcPatientComponents$ = this.actions$.pipe(
    ofType(EmcPatientComponentActionTypes.LoadPatient)
  );


  constructor(private actions$: Actions) {
  }

}
