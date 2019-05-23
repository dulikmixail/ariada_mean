import {Injectable} from '@angular/core';
import {CrudService} from '../../crud/crud.service';
import {BranchModel} from '../../../_models';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BranchService extends CrudService<BranchModel> {

  constructor(http: HttpClient) {
    super('branches', http);
  }
}
