import {createSelector} from '@ngrx/store';

import {AppState} from '../index';
import {State} from './gender.reducer';

const selectGenders = (state: AppState) => state.gender;

export const selectGenderList = createSelector(
  selectGenders,
  (state: State) => state.genders
);
