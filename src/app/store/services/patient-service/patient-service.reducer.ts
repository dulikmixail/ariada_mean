import {PatientServiceActions, PatientServiceActionTypes} from './patient-service.actions';
import {PageModel, PaginationModel, PatientModel} from '../../../_models';

export interface State {
  page: PageModel<PatientModel>;
  loading: boolean;
  lastPaginationModel: PaginationModel<PatientModel>;
}

export const initialState: State = {
  page: new PageModel<PatientModel>(),
  loading: false,
  lastPaginationModel: new PaginationModel<PatientModel>()
};

export function reducer(state = initialState, action: PatientServiceActions): State {
  switch (action.type) {

    case PatientServiceActionTypes.SearchPatients:
      return {...state, loading: true, lastPaginationModel: {...state.lastPaginationModel, query: action.payload.query}};
    case PatientServiceActionTypes.LoadPatientPage:
      return {...state, loading: true, lastPaginationModel: {...state.lastPaginationModel, options: action.payload.options}};
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
