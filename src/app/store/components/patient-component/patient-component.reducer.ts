import {PatientComponentActions, PatientComponentActionTypes} from './patient-component.actions';
import {PatientModel} from '../../../_models/api/patient.model';

export interface State {
  patient: PatientModel;
}

export const initialState: State = {
  patient: new PatientModel()
};

export function reducer(state = initialState, action: PatientComponentActions): State {
  switch (action.type) {

    case PatientComponentActionTypes.LoadPatientSuccess:
      return {patient: action.payload};

    default:
      return state;
  }
}
