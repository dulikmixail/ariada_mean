export class PaginationOptions {
  page: number;

  select?: Object | string;
  collation?: Object;
  sort?: Object | string;
  populate?: Array<any> | Object | string;
  lean?: boolean;
  leanWithId?: boolean;
  offset?: number;
  limit?: number;
  customLabels?: Object;

  constructor(page: number = 1) {
    this.page = page;
  }
}

export class SearchTextQuery {
  searchText: string;

  constructor(searchText: string = '') {
    this.searchText = searchText;
  }
}

export class PaginationModel<T> {
  query: T | SearchTextQuery;
  options: PaginationOptions;

  constructor(options: PaginationOptions = {page: 1}, query: T | SearchTextQuery = new SearchTextQuery()) {
    this.query = query;
    this.options = options;
  }
}
