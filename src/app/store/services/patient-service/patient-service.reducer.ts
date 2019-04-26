import {PatientServiceActions, PatientServiceActionTypes} from './patient-service.actions';
import {PatientModel} from '../../../_models/api/patient.model';
import {PageModel} from '../../../_models/api/page.model';

export interface State {
  page: PageModel<PatientModel>;
  loading: boolean;
  lastSearchText: string;
}

export const initialState: State = {
  page: new PageModel<PatientModel>(),
  loading: false,
  lastSearchText: ''
};

export function reducer(state = initialState, action: PatientServiceActions): State {
  switch (action.type) {

    case PatientServiceActionTypes.SearchPatients:
    case PatientServiceActionTypes.LoadPatientPage:
      return {...state, loading: true};
    case PatientServiceActionTypes.SearchPatientsSimply:
      return {...state, loading: true, lastSearchText: action.payload};
    case PatientServiceActionTypes.SearchPatientsSuccess:
    case PatientServiceActionTypes.LoadPatientPageSuccess:
      return {...state, page: action.payload, loading: false};
    case  PatientServiceActionTypes.DeletePatientSuccess:
      return {...state, page: {...state.page, docs: [...state.page.docs.filter(patient => patient._id !== action.payload._id)]}};
    case  PatientServiceActionTypes.UpdatePatientSuccess:
      return {
        ...state, page: {
          ...state.page, docs: [...state.page.docs.map(patient => {
            if (patient._id === action.payload._id) {
              return action.payload;
            } else {
              return patient;
            }
          })]
        }
      };
    default:
      return state;
  }
}
