import {GenderActions, GenderActionTypes} from './gender.actions';
import {GenderModel} from '../../_models/api/gender.model';

export interface State {
  genders: GenderModel[];
}

export const initialState: State = {
  genders: []
};

export function reducer(state = initialState, action: GenderActions): State {
  switch (action.type) {
    case GenderActionTypes.LoadGendersSuccess:
      return {genders: action.payload};
    default:
      return state;
  }
}
