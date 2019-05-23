import {EmployeeServiceActions, EmployeeServiceActionTypes} from './employee-service.actions';
import {EmployeeModel, PageModel} from '../../../_models';

export interface State {
  page: PageModel<EmployeeModel>;
  loading: boolean;
}

export const initialState: State = {
  page: new PageModel<EmployeeModel>(),
  loading: false,
};

export function reducer(state = initialState, action: EmployeeServiceActions): State {
  switch (action.type) {
    case EmployeeServiceActionTypes.LoadEmployees:
      return {...state, loading: true};
    case EmployeeServiceActionTypes.LoadEmployeesSuccess:
      return {...state, page: action.payload, loading: false};
    case EmployeeServiceActionTypes.SearchEmployees:
      return {...state, loading: true};
    case EmployeeServiceActionTypes.SearchEmployeesSuccess:
      return {...state, page: action.payload, loading: false};
    case EmployeeServiceActionTypes.DeleteEmployeeSuccess:
      return {...state, page: {...state.page, docs: [...state.page.docs.filter(employee => employee._id !== action.payload._id)]}};
    default:
      return state;
  }
}
