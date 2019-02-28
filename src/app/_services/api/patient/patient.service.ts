import {Injectable} from '@angular/core';
import {CrudService} from '../../crud/crud.service';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PatientService extends CrudService<any> {

  constructor(http: HttpClient) {
    super('patients', http);
  }
}
