import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {PhRSubGroupModel} from '../../../_models';
import {CrudService} from '../../crud/crud.service';

@Injectable({
  providedIn: 'root'
})
export class PhRSubGroupService extends CrudService<PhRSubGroupModel> {

  constructor(http: HttpClient) {
    super('ph_r_sub_groups', http);
  }
}
