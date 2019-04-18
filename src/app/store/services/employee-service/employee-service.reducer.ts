import {EmployeeServiceActions, EmployeeServiceActionTypes} from './employee-service.actions';
import {EmployeeModel} from '../../../_models/api/employee.model';
import {PageModel} from '../../../_models/api/page.model';

export interface State {
  page: PageModel<EmployeeModel>;
}

export const initialState: State = {
  page: new PageModel()
};

export function reducer(state = initialState, action: EmployeeServiceActions): State {
  switch (action.type) {

    case EmployeeServiceActionTypes.LoadEmployeesSuccess:
      return {...state, employees: action.payload};
    case EmployeeServiceActionTypes.AddEmployeeSuccess:
      return {...state, employees: [...state.employees, action.payload]};
    case EmployeeServiceActionTypes.DeleteEmployeeSuccess:
      return {...state, employees: [...state.employees.filter(employee => employee._id !== action.payload._id)]};
    case EmployeeServiceActionTypes.SetPageSizeSuccess:

    default:
      return state;
  }
}
