import {Action} from '@ngrx/store';
import {EmployeeModel} from '../../../_models/api/employee.model';
import {PageModel} from '../../../_models/api/page.model';

export enum EmployeeServiceActionTypes {
  LoadEmployees = '[EmployeeService] Load Employees',
  LoadEmployeesSuccess = '[EmployeeService] Load Employees Success',

  AddEmployee = '[EmployeeService] Add Employee',
  AddEmployeeSuccess = '[EmployeeService] Add Employee Success',

  DeleteEmployee = '[EmployeeService] Delete Employee',
  DeleteEmployeeSuccess = '[EmployeeService] Delete Employee Success',

  SetPageSizeSuccess = '[EmployeeService] Set Page Size Success'
}

// LoadEmployees
export class LoadEmployees implements Action {
  readonly type = EmployeeServiceActionTypes.LoadEmployees;
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

// SetPageSize
export class SetPageSizeSuccess implements Action {
  readonly type = EmployeeServiceActionTypes.SetPageSizeSuccess;

  constructor(public payload: number) {
  }
}

export type EmployeeServiceActions =
  | LoadEmployees
  | LoadEmployeesSuccess
  | AddEmployee
  | AddEmployeeSuccess
  | DeleteEmployee
  | DeleteEmployeeSuccess
  | SetPageSizeSuccess;
