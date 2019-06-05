import {Injectable} from '@angular/core';
import {CrudService} from '../../crud/crud.service';
import {ChamberModel} from '../../../_models';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ChamberService extends CrudService<ChamberModel> {


  constructor(http: HttpClient) {
    super('chambers', http);
  }

}
