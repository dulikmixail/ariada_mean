
import { EmcPatientActions, EmcPatientActionTypes } from './emc-patient.actions';

export interface State {

}

export const initialState: State = {

};

export function reducer(state = initialState, action: EmcPatientActions): State {
  switch (action.type) {

    case EmcPatientActionTypes.LoadEmcPatients:
      return state;

    default:
      return state;
  }
}
