import {Action} from '@ngrx/store';
import {PostModel} from '../../../_models';

export enum PostServiceActionTypes {
  LoadPosts = '[PostService] Load Posts',
  LoadPostsSuccess = '[PostService] Load Posts Success',

  AddPost = '[PostService] Add Post',
  AddPostSuccess = '[PostService] Add Post Success',

  DeletePost = '[PostService] Delete Post',
  DeletePostSuccess = '[PostService] Delete Post Success',

  ResetPostForm = '[PostService] Reset Post Form'
}

// LoadPosts
export class LoadPosts implements Action {
  readonly type = PostServiceActionTypes.LoadPosts;
}

export class LoadPostsSuccess implements Action {
  readonly type = PostServiceActionTypes.LoadPostsSuccess;

  constructor(public payload: PostModel[]) {
  }
}

// AddPost
export class AddPost implements Action {
  readonly type = PostServiceActionTypes.AddPost;

  constructor(public payload: PostModel) {
  }
}

export class AddPostSuccess implements Action {
  readonly type = PostServiceActionTypes.AddPostSuccess;

  constructor(public payload: PostModel) {
  }
}

// DeletePost
export class DeletePost implements Action {
  readonly type = PostServiceActionTypes.DeletePost;

  constructor(public payload: PostModel) {
  }
}

export class DeletePostSuccess implements Action {
  readonly type = PostServiceActionTypes.DeletePostSuccess;

  constructor(public payload: PostModel) {
  }
}

// ResetPostForm
export class ResetPostForm implements Action {
  readonly type = PostServiceActionTypes.ResetPostForm;
}

export type PostServiceActions =
  | LoadPosts
  | LoadPostsSuccess
  | AddPost
  | AddPostSuccess
  | DeletePost
  | DeletePostSuccess
  | ResetPostForm;
