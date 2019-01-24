import {Injectable} from '@angular/core';
import {environment} from '../../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {PhRAllowed} from '../../../_models/api/ph-r-allowed';

@Injectable({
  providedIn: 'root'
})
export class PhRAllowedService {

  constructor(private http: HttpClient) {
  }

  getAll() {
    return this.http.get<PhRAllowed[]>(`${environment.apiUrl}/ph_r_alloweds`);
  }
}
