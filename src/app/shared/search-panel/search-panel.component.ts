import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material';
import {Pagination} from '../../_helpers';

@Component({
  selector: 'app-search-panel',
  templateUrl: './search-panel.component.html',
  styleUrls: ['./search-panel.component.css']
})
export class SearchPanelComponent implements OnInit {
  @Input() length: number;
  @Input() pageSize: number;
  @Input() pageSizeOptions: number[];

  @Output() search = new EventEmitter<string>();
  @Output() page = new EventEmitter<MatPaginator>();

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(public pagination: Pagination) {
  }

  ngOnInit() {
    this.paginator.pageSize = this.pageSize ? this.pageSize : this.paginator.pageSize;
    this.paginator.pageSizeOptions = this.pageSizeOptions ? this.pageSizeOptions : this.paginator.pageSizeOptions;
    this.paginator.length = this.length ? this.length : this.paginator.length;
    this.pageEmit(this.paginator);
  }

  pageEmit(matPaginator: MatPaginator) {
    this.page.emit(matPaginator);
  }

  searchEmit(searchText: string) {
    this.paginator.firstPage();
    this.search.emit(searchText);
  }
}
