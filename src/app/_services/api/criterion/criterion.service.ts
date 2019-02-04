import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CrudService} from '../../crud/crud.service';
import {CriterionModel} from '../../../_models/api/criterion.model';

@Injectable({
  providedIn: 'root'
})
export class CriterionService extends CrudService<CriterionModel> {

  constructor(http: HttpClient) {
    super('criteria', http);
  }
}
