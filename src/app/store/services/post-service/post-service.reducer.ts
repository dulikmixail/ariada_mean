import {PostServiceActions, PostServiceActionTypes} from './post-service.actions';
import {PostModel} from '../../../_models';

export interface State {
  posts: PostModel[];
  form: {
    isReset: boolean;
  };
}

export const initialState: State = {
  posts: [],
  form: {
    isReset: false
  }
};

export function reducer(state = initialState, action: PostServiceActions): State {
  switch (action.type) {

    case PostServiceActionTypes.LoadPostsSuccess:
      return {...state, posts: action.payload};
    case PostServiceActionTypes.AddPostSuccess:
      return {...state, posts: [...state.posts, action.payload], form: {isReset: false}};
    case PostServiceActionTypes.DeletePostSuccess:
      return state;
    case PostServiceActionTypes.ResetPostForm:
      return {...state, form: {isReset: true}};
    default:
      return state;
  }
}
