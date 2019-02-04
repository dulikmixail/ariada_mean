
import { PhRAllowedActions, PhRAllowedActionTypes } from './ph-r-allowed.actions';

export interface State {

}

export const initialState: State = {

};

export function reducer(state = initialState, action: PhRAllowedActions): State {
  switch (action.type) {

    case PhRAllowedActionTypes.LoadPhRAlloweds:
      return state;

    default:
      return state;
  }
}
