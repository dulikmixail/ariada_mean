import {Injectable} from '@angular/core';
import {PhRAllowed} from '../../../_models/api/ph-r-allowed';
import {CrudService} from '../../crud/crud.service';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PhRAllowedService extends CrudService<PhRAllowed> {

  constructor(http: HttpClient) {
    super('ph_r_alloweds', http);
  }
}
