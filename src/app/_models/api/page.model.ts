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
  }
}
