import {Injectable} from '@angular/core';
import {CrudService} from '../../crud/crud.service';
import {HowIncomingModel} from '../../../_models/api/how-incoming.model';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HowIncomingService extends CrudService<HowIncomingModel> {

  constructor(http: HttpClient) {
    super('how_incomings', http);
  }
}
