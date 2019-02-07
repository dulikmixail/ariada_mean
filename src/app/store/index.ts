import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import {environment} from '../../environments/environment';
import * as fromPatient from './patient/patient.reducer';
import * as fromUser from './user/user.reducer';
import * as fromPhRAllowed from './ph-r-allowed/ph-r-allowed.reducer';
import * as fromGender from './gender/gender.reducer';

export interface AppState {

  patient: fromPatient.State;
  user: fromUser.State;
  phRAllowed: fromPhRAllowed.State;
  gender: fromGender.State;
}

export const reducers: ActionReducerMap<AppState> = {

  patient: fromPatient.reducer,
  user: fromUser.reducer,
  phRAllowed: fromPhRAllowed.reducer,
  gender: fromGender.reducer,
};


export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];
