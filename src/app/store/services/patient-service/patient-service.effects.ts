import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {map, switchMap} from 'rxjs/operators';

import {
  AddPatient,
  AddPatientSuccess, DeletePatient, DeletePatientSuccess, FilterPatients, FilterPatientsSuccess,
  LoadPatientsSuccess,
  PatientServiceActionTypes, SearchPatients, SearchPatientsSuccess, UpdatePatient, UpdatePatientSuccess
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
  addPatient$ = this.actions$.pipe(
    ofType(PatientServiceActionTypes.AddPatient),
    switchMap((action: AddPatient) => this.patientService.create(action.payload).pipe(
      map(patient => new AddPatientSuccess(patient))
    ))
  );

  // @Effect()
  // addPatientSuccess$ = this.actions$.pipe(
  //   ofType(PatientServiceActionTypes.AddPatientSuccess),
  //   mapTo(new LoadPatients())
  // );

  @Effect()
  deletePatient$ = this.actions$.pipe(
    ofType(PatientServiceActionTypes.DeletePatient),
    switchMap((action: DeletePatient) => this.patientService.delete(action.payload._id).pipe(
      map(patient => new DeletePatientSuccess(patient))
    ))
  );

  // @Effect()
  // deletePatientSuccess$ = this.actions$.pipe(
  //   ofType(PatientServiceActionTypes.DeletePatientSuccess),
  //   mapTo(new LoadPatients())
  // );

  @Effect()
  updatePatient = this.actions$.pipe(
    ofType(PatientServiceActionTypes.UpdatePatient),
    switchMap((action: UpdatePatient) => this.patientService.update(action.payload._id, action.payload).pipe(
      map(patient => new UpdatePatientSuccess(patient))
    ))
  );

  @Effect()
  filterPatient = this.actions$.pipe(
    ofType(PatientServiceActionTypes.FilterPatients),
    switchMap((action: FilterPatients) => this.patientService.filter(action.payload).pipe(
      map(patients => new FilterPatientsSuccess(patients))
    ))
  );

  @Effect()
  searchPatient = this.actions$.pipe(
    ofType(PatientServiceActionTypes.SearchPatients),
    switchMap((action: SearchPatients) => this.patientService.search(action.payload).pipe(
      map(patients => new SearchPatientsSuccess(patients))
    ))
  );

  constructor(private actions$: Actions, private patientService: PatientService) {
  }

}
