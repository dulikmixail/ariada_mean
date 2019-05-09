import {createSelector} from '@ngrx/store';

import {AppState} from '../..';
import {State} from './emc-patient-component.reducer';

const selectEmployeeService = (state: AppState) => state.emcPatientComponent;

export const emcPatientComponentLastPaginationModel = createSelector(
  selectEmployeeService,
  (state: State) => state.lastPaginationModel
);
