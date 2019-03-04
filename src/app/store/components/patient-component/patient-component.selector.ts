import {createSelector} from '@ngrx/store';

import {AppState} from '../..';
import {State} from './patient-component.reducer';

const selectPatientComponent = (state: AppState) => state.patientComponent;

export const selectPatient = createSelector(
  selectPatientComponent,
  (state: State) => state.patient
);
