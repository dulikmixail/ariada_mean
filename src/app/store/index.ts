import {
  ActionReducerMap,
  MetaReducer
} from '@ngrx/store';
import {environment} from '../../environments/environment';
import * as fromGenderService from './services/gender-service/gender-service.reducer';
import * as fromPatientService from './services/patient-service/patient-service.reducer';


export interface AppState {
  genderService: fromGenderService.State;
  patientService: fromPatientService.State;
}

export const reducers: ActionReducerMap<AppState> = {
  genderService: fromGenderService.reducer,
  patientService: fromPatientService.reducer,
};


export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];
