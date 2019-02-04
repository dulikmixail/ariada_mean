import { Injectable } from '@angular/core';
import {CrudService} from '../../crud/crud.service';
import {HttpClient} from '@angular/common/http';
import {PhRAllowedModel} from '../../../_models/api/ph-r-allowed.model';

@Injectable({
  providedIn: 'root'
})
export class PhRAllowedService extends CrudService<PhRAllowedModel> {

  constructor(http: HttpClient) {
    super('ph_r_alloweds', http);
  }
}
