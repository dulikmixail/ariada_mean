import {ChamberServiceActions, ChamberServiceActionTypes} from './chamber-service.actions';
import {ChamberModel} from '../../../_models';

export interface State {
  chamberModels: ChamberModel[];
}

export const initialState: State = {
  chamberModels: []
};

export function reducer(state = initialState, action: ChamberServiceActions): State {
  switch (action.type) {

    case ChamberServiceActionTypes.LoadChambersSuccess:
      return {...state, chamberModels: action.payload};

    default:
      return state;
  }
}
