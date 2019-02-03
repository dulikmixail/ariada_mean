import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CrudService} from '../../crud/crud.service';
import {Criterion} from '../../../_models/api/criterion';

@Injectable({
  providedIn: 'root'
})
export class CriterionService extends CrudService<Criterion> {

  constructor(http: HttpClient) {
    super('criteria', http);
  }
}
