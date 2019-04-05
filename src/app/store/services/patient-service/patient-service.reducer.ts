import {PatientServiceActions, PatientServiceActionTypes} from './patient-service.actions';
import {PatientModel} from '../../../_models/api/patient.model';

export interface State {
  patients: PatientModel[];
}

export const initialState: State = {
  patients: []
};

export function reducer(state = initialState, action: PatientServiceActions): State {
  switch (action.type) {

    case PatientServiceActionTypes.LoadPatientsSuccess:
      return {...state, patients: action.payload};
    case PatientServiceActionTypes.AddPatientSuccess:
      return {...state, patients: [...state.patients, action.payload]};
    case  PatientServiceActionTypes.DeletePatientSuccess:
      return {...state, patients: [...state.patients.filter(patient => patient._id !== action.payload._id)]};
    case  PatientServiceActionTypes.UpdatePatientSuccess:
      return {
        ...state, patients: [...state.patients.map(patient => {
          if (patient._id === action.payload._id) {
            return action.payload;
          } else {
            return patient;
          }
        })]
      };
    default:
      return state;
  }
}
