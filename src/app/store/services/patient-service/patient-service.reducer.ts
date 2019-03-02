import {PatientServiceActions, PatientServiceActionTypes} from './patient-service.actions';
import {PatientModel} from '../../../_models/api/patient.model';

export interface State {
  patients: PatientModel[];
  selectedPatient: PatientModel;
}

export const initialState: State = {
  patients: [],
  selectedPatient: new PatientModel()
};

export function reducer(state = initialState, action: PatientServiceActions): State {
  switch (action.type) {

    case PatientServiceActionTypes.LoadPatientsSuccess:
      return {...state, patients: action.payload};
    case PatientServiceActionTypes.AddPatientSuccess:
      return {...state, patients: [...state.patients, action.payload]};
    case PatientServiceActionTypes.AddSelectedPatientSuccess:
      return {...state, selectedPatient: action.payload};
    case PatientServiceActionTypes.ResetSelectedPatientSuccess:
      return {...state, selectedPatient: new PatientModel()};
    default:
      return state;
  }
}
