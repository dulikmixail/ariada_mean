import { Injectable } from '@angular/core';
import {CrudService} from '../../crud/crud.service';
import {HttpClient} from '@angular/common/http';
import {PhRAllowed} from '../../../_models/api/ph-r-allowed';

@Injectable({
  providedIn: 'root'
})
export class PhRAllowedService extends CrudService<PhRAllowed> {

  constructor(http: HttpClient) {
    super('ph_r_alloweds', http);
  }
}
