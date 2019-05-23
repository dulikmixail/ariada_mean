import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';


import {
  AddPost,
  AddPostSuccess,
  DeletePost,
  DeletePostSuccess,
  LoadPosts,
  LoadPostsSuccess,
  PostServiceActionTypes,
  ResetPostForm
} from './post-service.actions';
import {concatMapTo, map, mapTo, switchMap} from 'rxjs/operators';
import {PostService} from '../../../_services/api/post/post.service';

@Injectable()
export class PostServiceEffects {


  @Effect()
  loadPosts$ = this.actions$.pipe(
    ofType(PostServiceActionTypes.LoadPosts),
    switchMap(() => this.postService.getAll().pipe(
      map(posts => new LoadPostsSuccess(posts))
    ))
  );

  @Effect()
  addPost$ = this.actions$.pipe(
    ofType(PostServiceActionTypes.AddPost),
    switchMap((action: AddPost) => this.postService.create(action.payload).pipe(
      map(post => new AddPostSuccess(post))
    ))
  );

  @Effect()
  addBranchSuccess$ = this.actions$.pipe(
    ofType(PostServiceActionTypes.AddPostSuccess),
    concatMapTo([
      new ResetPostForm(),
      new LoadPosts()
    ])
  );

  @Effect()
  deletePost$ = this.actions$.pipe(
    ofType(PostServiceActionTypes.DeletePost),
    switchMap((action: DeletePost) => this.postService.delete(action.payload._id).pipe(
      map(post => new DeletePostSuccess(post))
    ))
  );

  @Effect()
  deletePostSuccess$ = this.actions$.pipe(
    ofType(PostServiceActionTypes.DeletePostSuccess),
    mapTo(new LoadPosts())
  );


  constructor(private actions$: Actions, private postService: PostService) {
  }

}
