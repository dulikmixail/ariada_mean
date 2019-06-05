import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {
  LoadChambers,
  LoadChambersSuccess,
  LoadDepartments,
  LoadDepartmentsSuccess,
  PlacementFormComponentActionTypes,
  SelectDepartment
} from './placement-form-component.actions';

import {BedService, ChamberService, DepartmentService} from '../../../_services/api';
import {map, switchMap, tap} from 'rxjs/operators';
import {ChamberModel} from '../../../_models';

@Injectable()
export class PlacementFormComponentEffects {


  @Effect()
  loadPlacementFormComponents$ = this.actions$.pipe(
    ofType(PlacementFormComponentActionTypes.LoadPlacementFormComponent),
    tap(() => new LoadDepartments())
  );

  @Effect()
  loadDepartments$ = this.actions$.pipe(
    ofType(PlacementFormComponentActionTypes.LoadDepartments),
    switchMap(() => this.departmentService.getAll().pipe(
      map(departments => new LoadDepartmentsSuccess(departments))
    ))
  );

  @Effect()
  selectDepartment$ = this.actions$.pipe(
    ofType(PlacementFormComponentActionTypes.SelectDepartment),
    tap((action: SelectDepartment) => console.log(action.payload))
  );

  @Effect()
  loadChambers$ = this.actions$.pipe(
    ofType(PlacementFormComponentActionTypes.LoadChambers),
    switchMap((action: LoadChambers) => {
      const filter = new ChamberModel();
      filter.department = action.payload;
      return this.chamberService.filter(filter).pipe(
        tap(filteredChamberModels => new LoadChambersSuccess(filteredChamberModels))
      );
    }),
  );


  constructor(private actions$: Actions,
              private departmentService: DepartmentService,
              private chamberService: ChamberService,
              private bedService: BedService) {
  }

}
