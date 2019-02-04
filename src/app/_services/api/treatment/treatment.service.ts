import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CrudService} from '../../crud/crud.service';
import {TreatmentModel} from '../../../_models/api/treatment.model';

@Injectable({
  providedIn: 'root'
})
export class TreatmentService extends CrudService<TreatmentModel> {

  constructor(http: HttpClient) {
    super('treatments', http);
  }
}
