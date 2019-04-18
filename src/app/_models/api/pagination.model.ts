export interface PaginationOptions {
  select: Object | string;
  collation: Object;
  sort: Object | string;
  populate: Array<any> | Object | string;
  lean: boolean;
  leanWithId: boolean;
  offset: number;
  page: number;
  limit: number;
  customLabels: Object;
}

export class PaginationModel {
  query: Object;
  options: PaginationOptions;
}
