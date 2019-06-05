import {createSelector} from '@ngrx/store';

import {AppState} from '../..';
import {State} from './chamber-service.reducer';

const selectChamberService = (state: AppState) => state.chamberService;


export const selectChamberModels = createSelector(
  selectChamberService,
  (state: State) => state.chamberModels
);
