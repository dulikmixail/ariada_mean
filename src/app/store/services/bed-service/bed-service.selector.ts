import {createSelector} from '@ngrx/store';

import {AppState} from '../..';
import {State} from './bed-service.reducer';

const selectBedService = (state: AppState) => state.bedService;


export const selectBedModels = createSelector(
  selectBedService,
  (state: State) => state.bedModels
);
