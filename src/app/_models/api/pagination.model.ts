import {MatPaginator} from '@angular/material';

export interface PaginationOptions {
  select?: Object | string;
  collation?: Object;
  sort?: Object | string;
  populate?: Array<any> | Object | string;
  lean?: boolean;
  leanWithId?: boolean;
  offset?: number;
  page: number;
  limit?: number;
  customLabels?: Object;
}

export class PaginationModel<T> {
  query: T | {};
  options: PaginationOptions;

  constructor(options: PaginationOptions = {page: 1}, query: T | {} = {}) {
    this.query = query;
    this.options = options;
  }

  setOptionsFromMatPaginator(matPaginator: MatPaginator) {
    this.options.page = matPaginator.pageIndex + 1;
    this.options.limit = matPaginator.pageSize;
  }
}
