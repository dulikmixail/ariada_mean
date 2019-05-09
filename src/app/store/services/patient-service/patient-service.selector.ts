import {createSelector} from '@ngrx/store';

import {AppState} from '../..';
import {State} from './patient-service.reducer';

const selectPatientService = (state: AppState) => state.patientService;

export const selectPatientPage = createSelector(
  selectPatientService,
  (state: State) => state.page
);

export const selectPatientDocs = createSelector(
  selectPatientService,
  (state: State) => state.page.docs
);

export const selectPatientLoadingPage = createSelector(
  selectPatientService,
  (state: State) => state.loading
);
