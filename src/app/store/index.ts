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

export interface State {

  patient: fromPatient.State;
  user: fromUser.State;
  phRAllowed: fromPhRAllowed.State;
}

export const reducers: ActionReducerMap<State> = {

  patient: fromPatient.reducer,
  user: fromUser.reducer,
  phRAllowed: fromPhRAllowed.reducer,
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
