import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';


import {LoadPostsSuccess, PostServiceActionTypes} from './post-service.actions';
import {map, switchMap} from 'rxjs/operators';
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


  constructor(private actions$: Actions, private postService: PostService) {
  }

}
