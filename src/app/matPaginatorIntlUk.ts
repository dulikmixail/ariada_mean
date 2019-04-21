import {MatPaginatorIntl} from '@angular/material';

export class MatPaginatorIntlUk extends MatPaginatorIntl {

  constructor() {
    super();
    this.itemsPerPageLabel = 'Елементів на сторінці';
    this.nextPageLabel = 'Наступна сторінка';
    this.previousPageLabel = 'Попередня сторінка';
    this.firstPageLabel = 'Перша сторінка';
    this.lastPageLabel = 'Остання сторінка';
    this.getRangeLabel = (page: number, pageSize: number, length: number) => {
      if (length === 0 || pageSize === 0) {
        return `0 з ${length}`;
      }
      length = Math.max(length, 0);
      const startIndex = page * pageSize;
      const endIndex = startIndex < length ? Math.min(startIndex + pageSize, length) : startIndex + pageSize;
      return `${startIndex + 1} - ${endIndex} з ${length}`;
    };
  }
}
