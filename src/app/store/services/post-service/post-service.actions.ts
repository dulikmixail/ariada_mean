import {Action} from '@ngrx/store';
import {PostModel} from '../../../_models/api/post.model';

export enum PostServiceActionTypes {
  LoadPosts = '[PostService] Load Posts',
  LoadPostsSuccess = '[PostService] Load Posts Success',
}

export class LoadPosts implements Action {
  readonly type = PostServiceActionTypes.LoadPosts;
}

export class LoadPostsSuccess implements Action {
  readonly type = PostServiceActionTypes.LoadPostsSuccess;

  constructor(public payload: PostModel[]) {
  }
}


export type PostServiceActions =
  | LoadPosts
  | LoadPostsSuccess;
