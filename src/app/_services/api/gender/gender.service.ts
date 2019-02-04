import { Injectable } from '@angular/core';
import {CrudService} from '../../crud/crud.service';
import {Criterion} from '../../../_models/api/criterion';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GenderService extends CrudService<Criterion> {

  constructor(http: HttpClient) {
    super('genders', http);
  }
}
