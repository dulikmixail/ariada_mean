import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';


import {
  LoadPatient,
  LoadPatientSuccess,
  PatientComponentActionTypes
} from './patient-component.actions';
import {map, switchMap} from 'rxjs/operators';
import {PatientService} from '../../../_services/api/patient/patient.service';

@Injectable()
export class PatientComponentEffects {


  @Effect()
  loadPatient$ = this.actions$.pipe(
    ofType(PatientComponentActionTypes.LoadPatient),
    switchMap((action: LoadPatient) => this.patientService.get(action.payload).pipe(
      map(patient => new LoadPatientSuccess(patient))
    )));


  constructor(private actions$: Actions, private patientService: PatientService) {
  }

}
