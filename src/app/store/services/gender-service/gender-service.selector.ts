import {createSelector} from '@ngrx/store';

import {AppState} from '../..';
import {State} from './gender-service.reducer';

const selectGenderService = (state: AppState) => state.genderService;

export const selectGenderList = createSelector(
  selectGenderService,
  (state: State) => state.genders
);
