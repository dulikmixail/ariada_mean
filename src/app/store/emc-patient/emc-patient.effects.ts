import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';



import { EmcPatientActionTypes } from './emc-patient.actions';

@Injectable()
export class EmcPatientEffects {


  @Effect()
  loadEmcPatients$ = this.actions$.pipe(ofType(EmcPatientActionTypes.LoadEmcPatients));


  constructor(private actions$: Actions) {}

}
