import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CrudService} from '../../crud/crud.service';
import {PsychologicalStatusModel} from '../../../_models/api/psychological-status.model';

@Injectable({
  providedIn: 'root'
})
export class PsychologicalStatusService extends CrudService<PsychologicalStatusModel> {

  constructor(http: HttpClient) {
    super('psychological_statuses', http);
  }
}
