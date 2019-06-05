import {Action} from '@ngrx/store';
import {DepartmentModel} from '../../../_models';

export enum DepartmentServiceActionTypes {
  LoadDepartments = '[DepartmentService] Load Departments',
  LoadDepartmentsSuccess = '[DepartmentService] Load Departments Success',
  DepartmentsEmptySuccess = '[DepartmentService] Departments EmptySuccess'
}

export class LoadDepartments implements Action {
  readonly type = DepartmentServiceActionTypes.LoadDepartments;
}

export class LoadDepartmentsSuccess implements Action {
  readonly type = DepartmentServiceActionTypes.LoadDepartmentsSuccess;

  constructor(public payload: DepartmentModel[]) {
  }
}

export class DepartmentsEmptySuccess implements Action {
  readonly type = DepartmentServiceActionTypes.DepartmentsEmptySuccess;
}


export type DepartmentServiceActions =
  | LoadDepartments
  | LoadDepartmentsSuccess
  | DepartmentsEmptySuccess;
