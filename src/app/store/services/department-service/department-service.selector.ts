import {createSelector} from '@ngrx/store';

import {AppState} from '../..';
import {State} from './department-service.reducer';

const selectDepartmentService = (state: AppState) => state.departmentService;


export const selectDepartmentModels = createSelector(
  selectDepartmentService,
  (state: State) => state.departmentModels
);
