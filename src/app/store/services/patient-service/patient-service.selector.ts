import {createSelector} from '@ngrx/store';

import {AppState} from '../..';
import {State} from './patient-service.reducer';

const selectPatientService = (state: AppState) => state.patientService;

export const selectPatientList = createSelector(
  selectPatientService,
  (state: State) => state.patients
);
