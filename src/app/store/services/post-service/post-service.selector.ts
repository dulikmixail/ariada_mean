import {createSelector} from '@ngrx/store';

import {AppState} from '../..';
import {State} from './post-service.reducer';

const selectPostService = (state: AppState) => state.postService;

export const selectPostList = createSelector(
  selectPostService,
  (state: State) => state.posts
);
