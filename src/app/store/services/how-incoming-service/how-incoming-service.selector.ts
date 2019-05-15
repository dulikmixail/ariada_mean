import {createSelector} from '@ngrx/store';

import {AppState} from '../..';
import {State} from './how-incoming-service.reducer';

const selectHowIncomingService = (state: AppState) => state.howIncomingService;


export const selectHowIncomingModels = createSelector(
  selectHowIncomingService,
  (state: State) => state.howIncomingModels
);
