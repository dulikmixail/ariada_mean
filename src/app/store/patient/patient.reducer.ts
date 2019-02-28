import {PatientActions, PatientActionTypes} from './patient.actions';
import {PatientModel} from '../../_models/api/patient.model';

export interface State {
  patients: PatientModel[];
  selectedPatient: PatientModel;
}

export const initialState: State = {
  patients: [],
  selectedPatient: undefined
};

export function reducer(state = initialState, action: PatientActions): State {
  switch (action.type) {

    case PatientActionTypes.LoadPatientsSuccess:
      return {...state, patients: action.payload};
    case PatientActionTypes.AddPatientSuccess:
      return {...state, patients: [...state.patients, action.payload]};
    case PatientActionTypes.AddSelectedPatientSuccess:
      return {...state, selectedPatient: action.payload};
    default:
      return state;
  }
}
