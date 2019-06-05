import {Action} from '@ngrx/store';
import {ChamberModel} from '../../../_models';

export enum ChamberServiceActionTypes {
  LoadChambers = '[ChamberService] Load Chambers',
  LoadChambersSuccess = '[ChamberService] Load Chambers Success',
  ChambersEmptySuccess = '[ChamberService] Chambers EmptySuccess',
}

export class LoadChambers implements Action {
  readonly type = ChamberServiceActionTypes.LoadChambers;
}

export class LoadChambersSuccess implements Action {
  readonly type = ChamberServiceActionTypes.LoadChambersSuccess;

  constructor(public payload: ChamberModel[]) {
  }
}

export class ChambersEmptySuccess implements Action {
  readonly type = ChamberServiceActionTypes.ChambersEmptySuccess;
}

export type ChamberServiceActions =
  | LoadChambers
  | LoadChambersSuccess
  | ChambersEmptySuccess;
