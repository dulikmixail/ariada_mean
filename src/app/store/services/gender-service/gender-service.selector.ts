import {createSelector} from '@ngrx/store';

import {AppState} from '../..';
import {State} from './gender-service.reducer';

const selectGenders = (state: AppState) => state.genderService;

export const selectGenderList = createSelector(
  selectGenders,
  (state: State) => state.genders
);
