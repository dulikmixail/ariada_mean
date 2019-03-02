import {createSelector} from '@ngrx/store';

import {AppState} from '../..';
import {State} from './patient-service.reducer';

const selectPatients = (state: AppState) => state.patientService;

export const selectPatientList = createSelector(
  selectPatients,
  (state: State) => state.patients
);

export const selectSelectedPatient = createSelector(
  selectPatients,
  (state: State) => state.selectedPatient
);
