import {Injectable} from '@angular/core';
import {CrudService} from '../../crud/crud.service';
import {PostModel} from '../../../_models';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostService extends CrudService<PostModel> {

  constructor(http: HttpClient) {
    super('posts', http);
  }
}
