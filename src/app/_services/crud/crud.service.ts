import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CrudService<T> {

  constructor(private path: string, private http: HttpClient) {
  }

  getAll() {
    return this.http.get<T[]>(`${environment.apiUrl}/${this.path}`);
  }
}
