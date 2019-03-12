import {createSelector} from '@ngrx/store';

import {AppState} from '../..';
import {State} from './employee-service.reducer';

const selectEmployeeService = (state: AppState) => state.employeeService;

export const selectEmployeeList = createSelector(
  selectEmployeeService,
  (state: State) => state.employees
);
