import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';


import {PatientActionTypes} from './patient.actions';

@Injectable()
export class PatientEffects {


  @Effect()
  loadPatients$ = this.actions$.pipe(ofType(PatientActionTypes.LoadPatients));


  constructor(private actions$: Actions) {
  }

}
