import {createSelector} from '@ngrx/store';

import {AppState} from '../..';
import {State} from './branch-service.reducer';

const selectBranchService = (state: AppState) => state.branchService;

export const selectBranchList = createSelector(
  selectBranchService,
  (state: State) => state.branches
);

export const selectBranchFormIsReset = createSelector(
  selectBranchService,
  (state: State) => state.form.isReset
);
