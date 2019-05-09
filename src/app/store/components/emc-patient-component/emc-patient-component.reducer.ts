import {EmcPatientComponentActions, EmcPatientComponentActionTypes} from './emc-patient-component.actions';
import {PatientModel} from '../../../_models/api/patient.model';
import {PaginationModel} from '../../../_models/api/pagination.model';

export interface State {
  patient: PatientModel;
  lastPaginationModel: PaginationModel<PatientModel>;
}

export const initialState: State = {
  patient: new PatientModel(),
  lastPaginationModel: new PaginationModel<PatientModel>(),
};

export function reducer(state = initialState, action: EmcPatientComponentActions): State {
  switch (action.type) {

    case EmcPatientComponentActionTypes.LoadPatient:
      return {...state, patient: action.payload};
    case EmcPatientComponentActionTypes.SearchPatient:
      return {...state, lastPaginationModel: action.payload};
    default:
      return state;
  }
}
