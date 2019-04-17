import {createSelector} from '@ngrx/store';

import {AppState} from '../..';
import {State} from './patient-search-panel-component.reducer';

const selectPatientSearchPanelComponent = (state: AppState) => state.patientSearchPanelComponent;

export const selectPatient = createSelector(
  selectPatientSearchPanelComponent,
  (state: State) => state.selectPatient
);
