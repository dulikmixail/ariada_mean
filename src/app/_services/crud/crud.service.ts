import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';

// @Injectable({
//   providedIn: 'root'
// })
export class CrudService<T> {

  constructor(private path: string, private http: HttpClient) {
  }

  getAll() {
    return this.http.get<T[]>(`${environment.apiUrl}/${this.path}`);
  }

  create(model: T | FormData) {
    return this.http.post<T>(`${environment.apiUrl}/${this.path}`, model);
  }

  get(id: string) {
    return this.http.get<T>(`${environment.apiUrl}/${this.path}/${id}`);
  }

  update(id: string, model: T) {
    return this.http.put<T>(`${environment.apiUrl}/${this.path}/${id}`, model);
  }


  delete(id: string) {
    return this.http.delete<T>(`${environment.apiUrl}/${this.path}/${id}`);
  }
}
