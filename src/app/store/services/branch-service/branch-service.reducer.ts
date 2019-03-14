import {BranchServiceActions, BranchServiceActionTypes} from './branch-service.actions';
import {BranchModel} from '../../../_models/api/branch.model';

export interface State {
  branches: BranchModel[];
}

export const initialState: State = {
  branches: []
};

export function reducer(state = initialState, action: BranchServiceActions): State {
  switch (action.type) {

    case BranchServiceActionTypes.LoadBranchesSuccess:
      return {branches: action.payload};
    case BranchServiceActionTypes.AddBranchSuccess:
      return {...state, branches: [...state.branches, action.payload]};
    case BranchServiceActionTypes.DeleteBranchSuccess:
      return state;
    default:
      return state;
  }
}
