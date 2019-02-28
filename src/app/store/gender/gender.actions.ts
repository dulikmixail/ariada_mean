import {Action} from '@ngrx/store';
import {GenderModel} from '../../_models/api/gender.model';

export enum GenderActionTypes {
  LoadGenders = '[Gender] Load Genders',
  LoadGendersSuccess = '[Gender] Load Genders Success'
}

export class LoadGenders implements Action {
  readonly type = GenderActionTypes.LoadGenders;
}

export class LoadGendersSuccess implements Action {
  readonly type = GenderActionTypes.LoadGendersSuccess;

  constructor(public payload: GenderModel[]) {
  }
}


export type GenderActions =
  | LoadGenders
  | LoadGendersSuccess;
