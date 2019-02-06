import {Injectable} from '@angular/core';
import {CrudService} from '../../crud/crud.service';
import {HttpClient} from '@angular/common/http';
import {PatientModel} from '../../../_models/api/patient.model';

@Injectable({
  providedIn: 'root'
})
export class PatientService extends CrudService<PatientModel> {

  constructor(http: HttpClient) {
    super('patients', http);
  }
}
