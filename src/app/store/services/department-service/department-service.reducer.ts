import {DepartmentServiceActions, DepartmentServiceActionTypes} from './department-service.actions';
import {DepartmentModel} from '../../../_models';

export interface State {
  departmentModels: DepartmentModel[];
}

export const initialState: State = {
  departmentModels: []
};

export function reducer(state = initialState, action: DepartmentServiceActions): State {
  switch (action.type) {

    case DepartmentServiceActionTypes.LoadDepartmentsSuccess:
      return {...state, departmentModels: action.payload};

    default:
      return state;
  }
}
