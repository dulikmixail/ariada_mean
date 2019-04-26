import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {map, switchMap, withLatestFrom} from 'rxjs/operators';

import {
  AddPatient,
  AddPatientSuccess, DeletePatient, DeletePatientSuccess, LoadPatientPage, LoadPatientPageSuccess,
  PatientServiceActionTypes, SearchPatients, SearchPatientsSimply, SearchPatientsSuccess, UpdatePatient, UpdatePatientSuccess
} from './patient-service.actions';
import {PatientService} from '../../../_services/api/patient/patient.service';
import {AppState} from '../../index';
import {Store} from '@ngrx/store';
import {PatientModel} from '../../../_models/api/patient.model';
import {PaginationModel} from '../../../_models/api/pagination.model';
import {selectLastSearchPatientText, selectPatientPage} from './patient-service.selector';
import {EMPTY} from 'rxjs';

@Injectable()
export class PatientServiceEffects {

  @Effect()
  searchPatients$ = this.actions$.pipe(
    ofType(PatientServiceActionTypes.SearchPatients),
    switchMap((action: SearchPatients) => this.patientService.getWithPagination(action.payload).pipe(
      map(patientsPage => new SearchPatientsSuccess(patientsPage))
    ))
  );

  @Effect()
  searchPatientsSimply = this.actions$.pipe(
    ofType(PatientServiceActionTypes.SearchPatientsSimply),
    map((action: SearchPatientsSimply) => action.payload),
    withLatestFrom(this.store.select(state => state.patientService.page)),
    switchMap(([payload, page]) => {
      const pageModel = new PaginationModel<PatientModel>(
        {
          limit: page.limit,
          page: page.page
        },
        payload
      );
      return this.patientService.searchWithPagination(pageModel).pipe(
        map(patientPage => new SearchPatientsSuccess(patientPage))
      );
    })
  );

  @Effect()
  loadPatientPage = this.actions$.pipe(
    ofType(PatientServiceActionTypes.LoadPatientPage),
    map((action: LoadPatientPage) => action.payload),
    withLatestFrom(this.store.select(selectLastSearchPatientText), this.store.select(selectPatientPage)),
    switchMap(([payload, lastSearchText, page]) => {
      if (page.docs && page.docs.length > 0) {
        payload.query = lastSearchText;
        return this.patientService.searchWithPagination(payload).pipe(
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

  constructor(private actions$: Actions, private store: Store<AppState>, private patientService: PatientService) {
  }

}
