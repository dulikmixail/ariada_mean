import {Action} from '@ngrx/store';
import {EmployeeModel, PageModel, PaginationModel} from '../../../_models';

export enum EmployeeServiceActionTypes {
  LoadEmployees = '[EmployeeService] Load Employees',
  LoadEmployeesSuccess = '[EmployeeService] Load Employees Success',

  SearchEmployees = '[EmployeeService] Search Employees',
  SearchEmployeesSuccess = '[EmployeeService] Search Employees Success',

  AddEmployee = '[EmployeeService] Add Employee',
  AddEmployeeSuccess = '[EmployeeService] Add Employee Success',

  DeleteEmployee = '[EmployeeService] Delete Employee',
  DeleteEmployeeSuccess = '[EmployeeService] Delete Employee Success',
}

// LoadEmployees
export class LoadEmployees implements Action {
  readonly type = EmployeeServiceActionTypes.LoadEmployees;

  constructor(public payload: PaginationModel<EmployeeModel>) {
  }
}

export class LoadEmployeesSuccess implements Action {
  readonly type = EmployeeServiceActionTypes.LoadEmployeesSuccess;

  constructor(public payload: PageModel<EmployeeModel>) {
  }
}

// AddEmployee
export class AddEmployee implements Action {
  readonly type = EmployeeServiceActionTypes.AddEmployee;

  constructor(public payload: EmployeeModel | FormData) {
  }
}

export class AddEmployeeSuccess implements Action {
  readonly type = EmployeeServiceActionTypes.AddEmployeeSuccess;

  constructor(public payload: EmployeeModel) {
  }
}

// SearchEmployees
export class SearchEmployees implements Action {
  readonly type = EmployeeServiceActionTypes.SearchEmployees;

  constructor(public payload: PaginationModel<EmployeeModel>) {
  }
}

export class SearchEmployeesSuccess implements Action {
  readonly type = EmployeeServiceActionTypes.SearchEmployeesSuccess;

  constructor(public payload: PageModel<EmployeeModel>) {
  }
}

// DeleteEmployee
export class DeleteEmployee implements Action {
  readonly type = EmployeeServiceActionTypes.DeleteEmployee;

  constructor(public payload: EmployeeModel) {
  }
}

export class DeleteEmployeeSuccess implements Action {
  readonly type = EmployeeServiceActionTypes.DeleteEmployeeSuccess;

  constructor(public payload: EmployeeModel) {
  }
}

export type EmployeeServiceActions =
  | LoadEmployees
  | LoadEmployeesSuccess
  | SearchEmployees
  | SearchEmployeesSuccess
  | AddEmployee
  | AddEmployeeSuccess
  | DeleteEmployee
  | DeleteEmployeeSuccess;
