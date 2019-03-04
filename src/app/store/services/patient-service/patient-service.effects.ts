import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {map, switchMap} from 'rxjs/operators';

import {
  AddPatient,
  AddPatientSuccess, DeletePatient, DeletePatientSuccess,
  LoadPatients,
  LoadPatientsSuccess,
  PatientServiceActionTypes
} from './patient-service.actions';
import {PatientService} from '../../../_services/api/patient/patient.service';

@Injectable()
export class PatientServiceEffects {


  @Effect()
  loadPatients$ = this.actions$.pipe(
    ofType(PatientServiceActionTypes.LoadPatients),
    switchMap(() => this.patientService.getAll().pipe(
      map(patients => new LoadPatientsSuccess(patients))
    ))
  );

  @Effect()
  addPatients$ = this.actions$.pipe(
    ofType(PatientServiceActionTypes.AddPatient),
    switchMap((action: AddPatient) => this.patientService.create(action.payload).pipe(
      map(patient => new AddPatientSuccess(patient))
    ))
  );

  @Effect()
  addPatientsSuccess$ = this.actions$.pipe(
    ofType(PatientServiceActionTypes.AddPatientSuccess),
    map(() => new LoadPatients())
  );

  @Effect()
  deletePatients$ = this.actions$.pipe(
    ofType(PatientServiceActionTypes.DeletePatient),
    switchMap((action: DeletePatient) => this.patientService.delete(action.payload._id).pipe(
      map(patient => new DeletePatientSuccess(patient))
    ))
  );

  @Effect()
  deletePatientsSuccess$ = this.actions$.pipe(
    ofType(PatientServiceActionTypes.DeletePatientSuccess),
    map(() => new LoadPatients())
  );


  constructor(private actions$: Actions, private patientService: PatientService) {
  }

}
