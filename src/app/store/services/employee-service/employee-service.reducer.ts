import {EmployeeServiceActions, EmployeeServiceActionTypes} from './employee-service.actions';
import {EmployeeModel} from '../../../_models/api/employee.model';

export interface State {
  employees: EmployeeModel[];
}

export const initialState: State = {
  employees: []
};

export function reducer(state = initialState, action: EmployeeServiceActions): State {
  switch (action.type) {

    case EmployeeServiceActionTypes.LoadEmployeesSuccess:
      return {...state, employees: action.payload};
    case EmployeeServiceActionTypes.AddEmployeeSuccess:
      return {...state, employees: [...state.employees, action.payload]};
    case EmployeeServiceActionTypes.DeleteEmployeeSuccess:
      return {...state, employees: [...state.employees.filter(employee => employee._id !== action.payload._id)]};
    default:
      return state;
  }
}
