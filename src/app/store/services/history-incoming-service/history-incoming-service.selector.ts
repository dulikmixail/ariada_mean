import {createSelector} from '@ngrx/store';

import {AppState} from '../..';
import {State} from './history-incoming-service.reducer';

const selectHistoryIncomingService = (state: AppState) => state.historyIncomingService;

export const selectHistoryIncomingModels = createSelector(
  selectHistoryIncomingService,
  (state: State) => state.historyIncomingModels
);
