import {Injectable} from '@angular/core';
import {CrudService} from '../../crud/crud.service';
import {BedModel} from '../../../_models';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BedService extends CrudService<BedModel> {

  constructor(http: HttpClient) {
    super('beds', http);
  }
}
