import {Action} from '@ngrx/store';
import {GenderModel} from '../../_models/api/gender.model';

export enum GenderActionTypes {
  GetAllGenders = '[Gender] Get All Genders',
  GetAllGendersSuccess = '[Gender] Get All Genders Success'
}

export class GetAllGenders implements Action {
  readonly type = GenderActionTypes.GetAllGenders;
}

export class GetAllGendersSuccess implements Action {
  readonly type = GenderActionTypes.GetAllGendersSuccess;

  constructor(public payload: GenderModel[]) {
  }
}


export type GenderActions =
  | GetAllGenders
  | GetAllGendersSuccess;
