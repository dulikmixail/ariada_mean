import {EmcPatientComponentActions, EmcPatientComponentActionTypes} from './emc-patient-component.actions';
import {PatientModel} from '../../../_models/api/patient.model';

export interface State {
  patient: PatientModel;
}

export const initialState: State = {
  patient: new PatientModel()
};

export function reducer(state = initialState, action: EmcPatientComponentActions): State {
  switch (action.type) {

    case EmcPatientComponentActionTypes.EditPatient:
      return state;

    default:
      return state;
  }
}
