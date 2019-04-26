import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';

export interface Page {
  loadPage();
}

@Injectable({
  providedIn: 'root'
})
export class Pagination {
  pageSize = environment.components.matPaginator.defaultPageSize;
  pageSizeOptions: number[] = environment.components.matPaginator.defaultPageSizeOptions;
}

