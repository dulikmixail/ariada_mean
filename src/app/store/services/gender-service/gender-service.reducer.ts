import {GenderServiceActions, GenderServiceActionTypes} from './gender-service.actions';
import {GenderModel} from '../../../_models';

export interface State {
  genders: GenderModel[];
}

export const initialState: State = {
  genders: []
};

export function reducer(state = initialState, action: GenderServiceActions): State {
  switch (action.type) {
    case GenderServiceActionTypes.LoadGendersSuccess:
      return {genders: action.payload};
    default:
      return state;
  }
}
