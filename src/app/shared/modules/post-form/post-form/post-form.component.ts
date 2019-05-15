import {Component, OnInit} from '@angular/core';
import {AddPost, PostServiceActionTypes} from '../../../../store/services/post-service/post-service.actions';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {
  addPostActionClass: any;
  addPostSuccessActionType: string;

  constructor() {
  }

  ngOnInit() {
    this.addPostActionClass = AddPost;
    this.addPostSuccessActionType = PostServiceActionTypes.AddPostSuccess;
  }

}
