import {Injectable} from '@angular/core';
import {CrudService} from '../../crud/crud.service';
import {EmployeeModel} from '../../../_models';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService extends CrudService<EmployeeModel> {

  constructor(http: HttpClient) {
    super('employees', http);
  }
}
