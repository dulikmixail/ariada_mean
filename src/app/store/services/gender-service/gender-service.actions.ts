import {Action} from '@ngrx/store';
import {GenderModel} from '../../../_models/api/gender.model';

export enum GenderServiceActionTypes {
  LoadGenders = '[GenderService] Load Genders',
  LoadGendersSuccess = '[GenderService] Load Genders Success'
}

export class LoadGenders implements Action {
  readonly type = GenderServiceActionTypes.LoadGenders;
}

export class LoadGendersSuccess implements Action {
  readonly type = GenderServiceActionTypes.LoadGendersSuccess;

  constructor(public payload: GenderModel[]) {
  }
}


export type GenderServiceActions =
  | LoadGenders
  | LoadGendersSuccess;
