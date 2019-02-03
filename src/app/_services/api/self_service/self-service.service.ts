import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CrudService} from '../../crud/crud.service';
import {SelfService} from '../../../_models/api/self-service';

@Injectable({
  providedIn: 'root'
})
export class SelfServiceService extends CrudService<SelfService> {

  constructor(http: HttpClient) {
    super('self_services', http);
  }
}
