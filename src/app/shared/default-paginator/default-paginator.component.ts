import {AfterViewChecked, Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {environment} from '../../../environments/environment';
import {MatPaginator} from '@angular/material';
import {PageModel} from '../../_models/api/page.model';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-default-paginator',
  templateUrl: './default-paginator.component.html',
  styleUrls: ['./default-paginator.component.css']
})
export class DefaultPaginatorComponent implements OnInit, AfterViewChecked {
  @Input() pageModel$: Observable<PageModel<any>> = new Observable<PageModel<any>>();
  @Input() defaultPageSize: number = environment.components.matPaginator.defaultPageSize;
  @Input() pageSizeOptions: number[] = environment.components.matPaginator.defaultPageSizeOptions;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  @Output() page: EventEmitter<MatPaginator> = new EventEmitter<MatPaginator>();

  constructor() {
  }

  ngOnInit() {
  }

  ngAfterViewChecked() {
    this.page.emit(this.paginator);
  }
}
