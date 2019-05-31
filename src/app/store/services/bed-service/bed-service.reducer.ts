import {BedServiceActions, BedServiceActionTypes} from './bed-service.actions';
import {BedModel} from '../../../_models';

export interface State {
  bedModels: BedModel[];
}

export const initialState: State = {
  bedModels: []
};

export function reducer(state = initialState, action: BedServiceActions): State {
  switch (action.type) {

    case BedServiceActionTypes.LoadBedsSuccess:
      return {...state, bedModels: action.payload};

    default:
      return state;
  }
}
