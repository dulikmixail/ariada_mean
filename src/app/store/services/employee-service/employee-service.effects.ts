import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';


import {
  AddEmployee,
  AddEmployeeSuccess,
  DeleteEmployee,
  DeleteEmployeeSuccess,
  EmployeeServiceActionTypes,
  LoadEmployees,
  LoadEmployeesSuccess,
  SearchEmployees,
  SearchEmployeesSuccess
} from './employee-service.actions';
import {map, switchMap} from 'rxjs/operators';
import {EmployeeService} from '../../../_services/api';

@Injectable()
export class EmployeeServiceEffects {


  @Effect()
  loadEmployees$ = this.actions$.pipe(
    ofType(EmployeeServiceActionTypes.LoadEmployees),
    switchMap((action: LoadEmployees) => this.employeeService.pagination(action.payload).pipe(
      map(employees => new LoadEmployeesSuccess(employees))
    ))
  );

  @Effect()
  searchEmployees$ = this.actions$.pipe(
    ofType(EmployeeServiceActionTypes.SearchEmployees),
    switchMap((action: SearchEmployees) => this.employeeService.pagination(action.payload).pipe(
      map(employees => new SearchEmployeesSuccess(employees))
    ))
  );

  @Effect()
  addEmployee$ = this.actions$.pipe(
    ofType(EmployeeServiceActionTypes.AddEmployee),
    switchMap((action: AddEmployee) => this.employeeService.create(action.payload).pipe(
      map(employee => new AddEmployeeSuccess(employee))
    ))
  );

  // @Effect()
  // addEmployeeSuccess$ = this.actions$.pipe(
  //   ofType(EmployeeServiceActionTypes.AddEmployeeSuccess),
  //   mapTo(new LoadEmployees())
  // );

  @Effect()
  deleteEmployee$ = this.actions$.pipe(
    ofType(EmployeeServiceActionTypes.DeleteEmployee),
    switchMap((action: DeleteEmployee) => this.employeeService.delete(action.payload._id).pipe(
      map(employee => new DeleteEmployeeSuccess(employee))
    ))
  );

  // @Effect()
  // deleteEmployeeSuccess$ = this.actions$.pipe(
  //   ofType(EmployeeServiceActionTypes.DeleteEmployeeSuccess),
  //   mapTo(new LoadEmployees())
  // );


  constructor(private actions$: Actions, private employeeService: EmployeeService) {
  }

}
