import {Injectable} from '@angular/core';
import {CrudService} from '../../crud/crud.service';
import {DepartmentModel} from '../../../_models';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService extends CrudService<DepartmentModel> {

  constructor(http: HttpClient) {
    super('departments', http);
  }
}
