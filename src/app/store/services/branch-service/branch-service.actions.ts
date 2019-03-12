import {Action} from '@ngrx/store';
import {BranchModel} from '../../../_models/api/branch.model';

export enum BranchServiceActionTypes {
  LoadBranches = '[BranchService] Load Branches',
  LoadBranchesSuccess = '[BranchService] Load Branches Success'
}

export class LoadBranches implements Action {
  readonly type = BranchServiceActionTypes.LoadBranches;
}

export class LoadBranchesSuccess {
  readonly type = BranchServiceActionTypes.LoadBranchesSuccess;

  constructor(public payload: BranchModel[]) {
  }
}


export type BranchServiceActions =
  | LoadBranches
  | LoadBranchesSuccess;
