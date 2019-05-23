import {Injectable} from '@angular/core';
import {CrudService} from '../../crud/crud.service';
import {CriterionModel} from '../../../_models';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GenderService extends CrudService<CriterionModel> {

  constructor(http: HttpClient) {
    super('genders', http);
  }
}
