import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
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

  constructor(public pagination: Pagination) {
  }

  ngOnInit() {
    if (this.pageSize) {
      this.pagination.pageSize = this.pageSize;
    }
    if (this.pageSizeOptions) {
      this.pagination.pageSizeOptions = this.pageSizeOptions;
    }
  }

}
