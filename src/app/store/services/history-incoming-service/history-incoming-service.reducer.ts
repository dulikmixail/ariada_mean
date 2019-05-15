import {HistoryIncomingServiceActions, HistoryIncomingServiceActionTypes} from './history-incoming-service.actions';
import {HistoryIncomingModel} from '../../../_models/api/history-incoming.model';

export interface State {
  historyIncomingModels: HistoryIncomingModel[];
}

export const initialState: State = {
  historyIncomingModels: []
};

export function reducer(state = initialState, action: HistoryIncomingServiceActions): State {
  switch (action.type) {

    case HistoryIncomingServiceActionTypes.LoadHistoryIncomingSuccess:
      return {...state, historyIncomingModels: action.payload};

    default:
      return state;
  }
}
