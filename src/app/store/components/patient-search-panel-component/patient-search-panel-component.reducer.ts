import {PatientSearchPanelComponentActions, PatientSearchPanelComponentActionTypes} from './patient-search-panel-component.actions';
import {PatientModel} from '../../../_models';

export interface State {
  selectPatient: PatientModel;
}

export const initialState: State = {
  selectPatient: undefined
};

export function reducer(state = initialState, action: PatientSearchPanelComponentActions): State {
  switch (action.type) {

    case PatientSearchPanelComponentActionTypes.SelectPatientSuccess:
      return {...state, selectPatient: action.payload};

    default:
      return state;
  }
}
