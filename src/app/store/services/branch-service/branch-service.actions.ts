import {Action} from '@ngrx/store';
import {BranchModel} from '../../../_models';

export enum BranchServiceActionTypes {
  LoadBranches = '[BranchService] Load Branches',
  LoadBranchesSuccess = '[BranchService] Load Branches Success',

  AddBranch = '[BranchService] Add Branch',
  AddBranchSuccess = '[BranchService] Add Branch Success',

  DeleteBranch = '[BranchService] Delete Branch',
  DeleteBranchSuccess = '[BranchService] Delete Branch Success',

  ResetBranchForm = '[BranchService] Reset Branch Form'
}

// LoadBranches
export class LoadBranches implements Action {
  readonly type = BranchServiceActionTypes.LoadBranches;
}

export class LoadBranchesSuccess {
  readonly type = BranchServiceActionTypes.LoadBranchesSuccess;

  constructor(public payload: BranchModel[]) {
  }
}

// AddBranch
export class AddBranch implements Action {
  readonly type = BranchServiceActionTypes.AddBranch;

  constructor(public payload: BranchModel) {
  }
}

export class AddBranchSuccess implements Action {
  readonly type = BranchServiceActionTypes.AddBranchSuccess;

  constructor(public payload: BranchModel) {
  }
}

// DeleteBranch
export class DeleteBranch implements Action {
  readonly type = BranchServiceActionTypes.DeleteBranch;

  constructor(public payload: BranchModel) {
  }
}

export class DeleteBranchSuccess implements Action {
  readonly type = BranchServiceActionTypes.DeleteBranchSuccess;

  constructor(public payload: BranchModel) {
  }
}

// ResetForm
export class ResetBranchForm implements Action {
  readonly type = BranchServiceActionTypes.ResetBranchForm;
}

export type BranchServiceActions =
  | LoadBranches
  | LoadBranchesSuccess
  | AddBranch
  | AddBranchSuccess
  | DeleteBranch
  | DeleteBranchSuccess
  | ResetBranchForm;
