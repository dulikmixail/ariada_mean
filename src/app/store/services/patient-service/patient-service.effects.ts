import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {map, switchMap, withLatestFrom} from 'rxjs/operators';

import {
  AddPatient,
  AddPatientSuccess,
  DeletePatient,
  DeletePatientSuccess,
  LoadPatientPage,
  LoadPatientPageSuccess,
  PatientServiceActionTypes,
  SearchPatients,
  SearchPatientsSuccess,
  UpdatePatient,
  UpdatePatientSuccess
} from './patient-service.actions';
import {PatientService} from '../../../_services/api';
import {AppState} from '../../index';
import {Store} from '@ngrx/store';
import {EMPTY} from 'rxjs';
import {selectPatientPage} from './patient-service.selector';

@Injectable()
export class PatientServiceEffects {

  @Effect()
  searchPatients$ = this.actions$.pipe(
    ofType(PatientServiceActionTypes.SearchPatients),
    switchMap((action: SearchPatients) => this.patientService.pagination(action.payload).pipe(
      map(patientsPage => new SearchPatientsSuccess(patientsPage))
    ))
  );

  @Effect()
  loadPatientPage = this.actions$.pipe(
    ofType(PatientServiceActionTypes.LoadPatientPage),
    map((action: LoadPatientPage) => action.payload),
    withLatestFrom(this.store.select(selectPatientPage)),
    switchMap(([payload, page]) => {
      if (page.docs && page.docs.length > 0) {
        return this.patientService.pagination(payload).pipe(
          map(patientPage => new LoadPatientPageSuccess(patientPage))
        );
      } else {
        this.store.dispatch(new LoadPatientPageSuccess(page));
        return EMPTY;
      }
    })
  );

  @Effect()
  addPatient$ = this.actions$.pipe(
    ofType(PatientServiceActionTypes.AddPatient),
    switchMap((action: AddPatient) => this.patientService.create(action.payload).pipe(
      map(patient => new AddPatientSuccess(patient))
    ))
  );

  @Effect()
  deletePatient$ = this.actions$.pipe(
    ofType(PatientServiceActionTypes.DeletePatient),
    switchMap((action: DeletePatient) => this.patientService.delete(action.payload._id).pipe(
      map(patient => new DeletePatientSuccess(patient))
    ))
  );

  @Effect()
  updatePatient = this.actions$.pipe(
    ofType(PatientServiceActionTypes.UpdatePatient),
    switchMap((action: UpdatePatient) => this.patientService.update(action.payload._id, action.payload).pipe(
      map(patient => new UpdatePatientSuccess(patient))
    ))
  );

  constructor(private actions$: Actions, private store: Store<AppState>, private patientService: PatientService) {
  }

}
