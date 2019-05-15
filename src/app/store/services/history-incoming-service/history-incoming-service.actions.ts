import {Action} from '@ngrx/store';
import {HistoryIncomingModel} from '../../../_models/api/history-incoming.model';

export enum HistoryIncomingServiceActionTypes {
  LoadHistoryIncoming = '[HistoryIncomingService] Load HistoryIncoming',
  LoadHistoryIncomingSuccess = '[HistoryIncomingService] Load HistoryIncoming Success'
}

export class LoadHistoryIncoming implements Action {
  readonly type = HistoryIncomingServiceActionTypes.LoadHistoryIncoming;
}

export class LoadHistoryIncomingSuccess implements Action {
  readonly type = HistoryIncomingServiceActionTypes.LoadHistoryIncomingSuccess;

  constructor(public payload: HistoryIncomingModel[]) {
  }
}


export type HistoryIncomingServiceActions =
  | LoadHistoryIncoming
  | LoadHistoryIncomingSuccess;
