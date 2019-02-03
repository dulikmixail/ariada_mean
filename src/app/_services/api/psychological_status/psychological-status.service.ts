import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CrudService} from '../../crud/crud.service';
import {PsychologicalStatus} from '../../../_models/api/psychological-status';

@Injectable({
  providedIn: 'root'
})
export class PsychologicalStatusService extends CrudService<PsychologicalStatus> {

  constructor(http: HttpClient) {
    super('psychological_statuses', http);
  }
}
