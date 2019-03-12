import {PostServiceActions, PostServiceActionTypes} from './post-service.actions';
import {PostModel} from '../../../_models/api/post.model';

export interface State {
  posts: PostModel[];
}

export const initialState: State = {
  posts: []
};

export function reducer(state = initialState, action: PostServiceActions): State {
  switch (action.type) {

    case PostServiceActionTypes.LoadPostsSuccess:
      return {posts: action.payload};

    default:
      return state;
  }
}
