import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';


import {DepartmentsEmptySuccess, DepartmentServiceActionTypes, LoadDepartmentsSuccess} from './department-service.actions';
import {Store} from '@ngrx/store';
import {AppState} from '../../index';
import {DepartmentService} from '../../../_services/api';
import {map, switchMap, withLatestFrom} from 'rxjs/operators';
import {selectDepartmentModels} from './department-service.selector';
import {EMPTY} from 'rxjs';

@Injectable()
export class DepartmentServiceEffects {


  @Effect()
  loadDepartmentServices$ = this.actions$.pipe(
    ofType(DepartmentServiceActionTypes.LoadDepartments),
    withLatestFrom(this.store.select(selectDepartmentModels)),
    switchMap(([, departmentModels]) => {
      if (departmentModels.length === 0) {
        return this.departmentService.getAll().pipe(
          map(departments => new LoadDepartmentsSuccess(departments))
        );
      } else {
        this.store.dispatch(new DepartmentsEmptySuccess());
        return EMPTY;
      }
    })
  );


  constructor(private actions$: Actions,
              private store: Store<AppState>,
              private departmentService: DepartmentService) {
  }

}
