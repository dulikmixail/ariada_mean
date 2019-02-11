import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';

import {map, switchMap} from 'rxjs/operators';

import {AddPatient, AddPatientSuccess, GetAllPatientsSuccess, PatientActionTypes} from './patient.actions';
import {PatientService} from '../../_services/api/patient/patient.service';

@Injectable()
export class PatientEffects {


  @Effect()
  loadPatients$ = this.actions$.pipe(
    ofType(PatientActionTypes.GetAllPatients),
    switchMap(() => this.patientService.getAll().pipe(
      map(patients => new GetAllPatientsSuccess(patients))
    ))
  );

  @Effect()
  addPatients$ = this.actions$.pipe(
    ofType(PatientActionTypes.AddPatient),
    switchMap((action: AddPatient) => this.patientService.create(action.payload).pipe(
      map(patient => new AddPatientSuccess(patient))
    )));


  constructor(private actions$: Actions, private patientService: PatientService) {
  }

}
