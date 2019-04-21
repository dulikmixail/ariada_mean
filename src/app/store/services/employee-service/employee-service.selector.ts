import {createSelector} from '@ngrx/store';

import {AppState} from '../..';
import {State} from './employee-service.reducer';

const selectEmployeeService = (state: AppState) => state.employeeService;

export const selectEmployeePage = createSelector(
  selectEmployeeService,
  (state: State) => state.page
);

export const selectEmployeeDocs = createSelector(
  selectEmployeeService,
  (state: State) => state.page.docs
);

export const selectLoadingEmployeePage = createSelector(
  selectEmployeeService,
  (state: State) => state.loading
);
