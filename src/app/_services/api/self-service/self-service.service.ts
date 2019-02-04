import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CrudService} from '../../crud/crud.service';
import {SelfServiceModel} from '../../../_models/api/self-service.model';

@Injectable({
  providedIn: 'root'
})
export class SelfServiceService extends CrudService<SelfServiceModel> {

  constructor(http: HttpClient) {
    super('self_services', http);
  }
}
