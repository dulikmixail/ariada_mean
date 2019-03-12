import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';


import {
  AddEmployee,
  AddEmployeeSuccess,
  DeleteEmployee, DeleteEmployeeSuccess,
  EmployeeServiceActionTypes,
  LoadEmployees,
  LoadEmployeesSuccess
} from './employee-service.actions';
import {map, switchMap} from 'rxjs/operators';
import {EmployeeService} from '../../../_services/api/employee/employee.service';

@Injectable()
export class EmployeeServiceEffects {


  @Effect()
  loadEmployees$ = this.actions$.pipe(
    ofType(EmployeeServiceActionTypes.LoadEmployees),
    switchMap(() => this.employeeService.getAll().pipe(
      map(employees => new LoadEmployeesSuccess(employees))
    ))
  );

  @Effect()
  addEmployee$ = this.actions$.pipe(
    ofType(EmployeeServiceActionTypes.AddEmployee),
    switchMap((action: AddEmployee) => this.employeeService.create(action.payload).pipe(
      map(employee => new AddEmployeeSuccess(employee))
    ))
  );

  @Effect()
  addEmployeeSuccess$ = this.actions$.pipe(
    ofType(EmployeeServiceActionTypes.AddEmployeeSuccess),
    map(() => new LoadEmployees())
  );

  @Effect()
  deleteEmployee$ = this.actions$.pipe(
    ofType(EmployeeServiceActionTypes.DeleteEmployee),
    switchMap((action: DeleteEmployee) => this.employeeService.delete(action.payload._id).pipe(
      map(employee => new DeleteEmployeeSuccess(employee))
    ))
  );

  @Effect()
  deleteEmployeeSuccess$ = this.actions$.pipe(
    ofType(EmployeeServiceActionTypes.DeleteEmployeeSuccess),
    map(() => new LoadEmployees())
  );


  constructor(private actions$: Actions, private employeeService: EmployeeService) {
  }

}
