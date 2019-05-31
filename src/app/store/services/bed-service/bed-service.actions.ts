import {Action} from '@ngrx/store';
import {BedModel} from '../../../_models';

export enum BedServiceActionTypes {
  LoadBeds = '[BedService] Load Beds',
  LoadBedsSuccess = '[BedService] Load Beds Success',
  BedsEmptySuccess = '[BedService] Beds EmptySuccess',
}

export class LoadBeds implements Action {
  readonly type = BedServiceActionTypes.LoadBeds;
}

export class LoadBedsSuccess implements Action {
  readonly type = BedServiceActionTypes.LoadBedsSuccess;

  constructor(public payload: BedModel[]) {
  }
}

export class BedsEmptySuccess implements Action {
  readonly type = BedServiceActionTypes.BedsEmptySuccess;
}


export type BedServiceActions =
  | LoadBeds
  | LoadBedsSuccess
  | BedsEmptySuccess;
