import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {select, Store} from '@ngrx/store';
import {PostModel} from '../../../../_models/api/post.model';
import {AppState} from '../../../../store';
import {DeletePost, LoadPosts} from '../../../../store/services/post-service/post-service.actions';
import {selectPostList} from '../../../../store/services/post-service/post-service.selector';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  deletePost: any;
  loadPosts: any;
  posts$: Observable<PostModel[]>;

  constructor(private store: Store<AppState>) {
  }

  ngOnInit() {
    this.deletePost = DeletePost;
    this.loadPosts = LoadPosts;
    this.posts$ = this.store.pipe(select(selectPostList));
  }

}
