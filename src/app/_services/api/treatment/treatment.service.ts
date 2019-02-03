import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CrudService} from '../../crud/crud.service';
import {Treatment} from '../../../_models/api/treatment';

@Injectable({
  providedIn: 'root'
})
export class TreatmentService extends CrudService<Treatment> {

  constructor(http: HttpClient) {
    super('treatments', http);
  }
}
