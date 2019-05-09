import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {MatPaginator} from '@angular/material';
import {PaginationModel} from '../_models/api/pagination.model';

export interface Page {
  loadPage($event: MatPaginator);
}

@Injectable({
  providedIn: 'root'
})
export class Pagination {
  pageSize = environment.components.matPaginator.defaultPageSize;
  pageSizeOptions: number[] = environment.components.matPaginator.defaultPageSizeOptions;

  static setPaginationOptionsFromMatPaginator(paginationModel: PaginationModel<any>, matPaginator: MatPaginator) {
    paginationModel.options.page = matPaginator.pageIndex + 1;
    paginationModel.options.limit = matPaginator.pageSize;
  }
}

