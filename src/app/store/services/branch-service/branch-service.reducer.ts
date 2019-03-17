import {BranchServiceActions, BranchServiceActionTypes} from './branch-service.actions';
import {BranchModel} from '../../../_models/api/branch.model';

export interface State {
  branches: BranchModel[];
  form: {
    isReset: boolean;
  };
}

export const initialState: State = {
  branches: [],
  form: {
    isReset: false
  }
};

export function reducer(state = initialState, action: BranchServiceActions): State {
  switch (action.type) {

    case BranchServiceActionTypes.LoadBranchesSuccess:
      return {...state, branches: action.payload};
    case BranchServiceActionTypes.AddBranchSuccess:
      return {...state, branches: [...state.branches, action.payload], form: {isReset: false}};
    case BranchServiceActionTypes.DeleteBranchSuccess:
      return state;
    case BranchServiceActionTypes.ResetBranchForm:
      return {...state, form: {isReset: true}};
    default:
      return state;
  }
}
