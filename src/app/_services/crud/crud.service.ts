import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {PaginationModel, SearchTextQuery} from '../../_models/api/pagination.model';
import {PageModel} from '../../_models/api/page.model';

// @Injectable({
//   providedIn: 'root'
// })
export class CrudService<T> {

  constructor(public path: string, public http: HttpClient) {
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

  search(searchText: string) {
    return this.http.post<T[]>(`${environment.apiUrl}/${this.path}/search`, {searchText: searchText});
  }

  pagination(paginationModel: PaginationModel<T | SearchTextQuery>) {
    return this.http.post<PageModel<T>>(`${environment.apiUrl}/${this.path}/pagination`, paginationModel);
  }
}
