import {Action} from '@ngrx/store';
import {HowIncomingModel} from '../../../_models/api/how-incoming.model';

export enum HowIncomingServiceActionTypes {
  LoadHowIncoming = '[HowIncomingService] Load HowIncoming',
  LoadHowIncomingSuccess = '[HowIncomingService] Load HowIncoming Success',
  HowIncomingEmptySuccess = '[HowIncomingService] Empty Success',
}

export class LoadHowIncoming implements Action {
  readonly type = HowIncomingServiceActionTypes.LoadHowIncoming;
}

export class LoadHowIncomingSuccess implements Action {
  readonly type = HowIncomingServiceActionTypes.LoadHowIncomingSuccess;

  constructor(public payload: HowIncomingModel[]) {
  }
}

export class HowIncomingEmptySuccess implements Action {
  readonly type = HowIncomingServiceActionTypes.HowIncomingEmptySuccess;
}


export type HowIncomingServiceActions =
  | LoadHowIncoming
  | LoadHowIncomingSuccess
  | HowIncomingEmptySuccess;
