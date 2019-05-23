import {Injectable} from '@angular/core';
import {CrudService} from '../../crud/crud.service';
import {HttpClient} from '@angular/common/http';
import {HistoryIncomingModel} from '../../../_models';

@Injectable({
  providedIn: 'root'
})
export class HistoryIncomingService extends CrudService<HistoryIncomingModel> {

  constructor(http: HttpClient) {
    super('incoming_histories', http);
  }
}
