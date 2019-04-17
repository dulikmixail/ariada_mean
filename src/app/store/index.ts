import {
  ActionReducerMap,
  MetaReducer
} from '@ngrx/store';
import * as fromGenderService from './services/gender-service/gender-service.reducer';
import * as fromPatientService from './services/patient-service/patient-service.reducer';
import * as fromEmcPatientComponent from './components/emc-patient-component/emc-patient-component.reducer';
import * as fromPatientComponent from './components/patient-component/patient-component.reducer';
import * as fromBranchService from './services/branch-service/branch-service.reducer';
import * as fromPostService from './services/post-service/post-service.reducer';
import * as fromEmployeeService from './services/employee-service/employee-service.reducer';
import {environment} from '../../environments/environment';
import * as fromPatientSearchPanelComponent from './components/patient-search-panel-component/patient-search-panel-component.reducer';


export interface AppState {
  genderService: fromGenderService.State;
  patientService: fromPatientService.State;
  emcPatientComponent: fromEmcPatientComponent.State;
  patientComponent: fromPatientComponent.State;
  branchService: fromBranchService.State;
  postService: fromPostService.State;
  employeeService: fromEmployeeService.State;
  patientSearchPanelComponent: fromPatientSearchPanelComponent.State;
}

export const reducers: ActionReducerMap<AppState> = {
  genderService: fromGenderService.reducer,
  patientService: fromPatientService.reducer,
  emcPatientComponent: fromEmcPatientComponent.reducer,
  patientComponent: fromPatientComponent.reducer,
  branchService: fromBranchService.reducer,
  postService: fromPostService.reducer,
  employeeService: fromEmployeeService.reducer,
  patientSearchPanelComponent: fromPatientSearchPanelComponent.reducer,
};


export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];
