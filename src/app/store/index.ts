import {
  ActionReducerMap,
  MetaReducer
} from '@ngrx/store';
import {environment} from '../../environments/environment';
import * as fromGenderService from './services/gender-service/gender-service.reducer';
import * as fromPatientService from './services/patient-service/patient-service.reducer';
import * as fromEmcPatientComponent from './components/emc-patient-component/emc-patient-component.reducer';
import * as fromPatientComponent from './components/patient-component/patient-component.reducer';


export interface AppState {
  genderService: fromGenderService.State;
  patientService: fromPatientService.State;
  emcPatientComponent: fromEmcPatientComponent.State;
  patientComponent: fromPatientComponent.State;
}

export const reducers: ActionReducerMap<AppState> = {
  genderService: fromGenderService.reducer,
  patientService: fromPatientService.reducer,
  emcPatientComponent: fromEmcPatientComponent.reducer,
  patientComponent: fromPatientComponent.reducer,
};


export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];
