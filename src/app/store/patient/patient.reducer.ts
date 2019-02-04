import {PatientActions, PatientActionTypes} from './patient.actions';
import {PatientModel} from '../../_models/api/patient.model';

export interface State {
  patients: PatientModel[];
}

export const initialState: State = {patients: []};

export function reducer(state = initialState, action: PatientActions): State {
  switch (action.type) {

    case PatientActionTypes.LoadPatients:
      return state;
    case PatientActionTypes.AddPatient:
      return {...state, patients: [...state.patients, action.payload]};
    default:
      return state;
  }
}
