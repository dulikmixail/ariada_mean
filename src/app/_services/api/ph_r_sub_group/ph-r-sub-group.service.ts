import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../../environments/environment';
import {PhRSubGroup} from '../../../_models/api/ph-r-sub-group';

@Injectable({
  providedIn: 'root'
})
export class PhRSubGroupService {

  constructor(private http: HttpClient) {
  }

  getAll() {
    return this.http.get<PhRSubGroup[]>(`${environment.apiUrl}/ph_r_sub_groups`);
  }
}
