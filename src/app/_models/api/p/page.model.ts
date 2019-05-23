import {environment} from '../../../../environments/environment';

export class PageModel<T> {
  docs: T[];
  totalDocs: number;
  limit: number;
  hasPrevPage: boolean;
  hasNextPage: boolean;
  page: number;
  totalPages: number;
  offset: number;
  prevPage: number;
  nextPage: number;
  pagingCounter: number;

  constructor() {
    this.docs = [];
    this.limit = environment.defaultPageModel.limit;
    this.page = environment.defaultPageModel.page;
  }
}
