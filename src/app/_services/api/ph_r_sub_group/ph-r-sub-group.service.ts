import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {PhRSubGroup} from '../../../_models/api/ph-r-sub-group';
import {CrudService} from '../../crud/crud.service';

@Injectable({
  providedIn: 'root'
})
export class PhRSubGroupService extends CrudService<PhRSubGroup> {

  constructor(http: HttpClient) {
    super('ph_r_sub_groups', http);
  }
}
