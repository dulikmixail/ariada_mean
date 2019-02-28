import {createSelector} from '@ngrx/store';

import {AppState} from '../index';
import {State} from './patient.reducer';

const selectPatients = (state: AppState) => state.patient;

export const selectPatientList = createSelector(
  selectPatients,
  (state: State) => state.patients
);

export const selectSelectedPatient = createSelector(
  selectPatients,
  (state: State) => state.selectedPatient
);
