import {HowIncomingServiceActions, HowIncomingServiceActionTypes} from './how-incoming-service.actions';
import {HowIncomingModel} from '../../../_models';

export interface State {
  howIncomingModels: HowIncomingModel[];
}

export const initialState: State = {
  howIncomingModels: []
};

export function reducer(state = initialState, action: HowIncomingServiceActions): State {
  switch (action.type) {

    case HowIncomingServiceActionTypes.LoadHowIncomingSuccess:
      return {...state, howIncomingModels: action.payload};
    default:
      return state;
  }
}
