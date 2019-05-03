import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {Observable} from 'rxjs';
import {MatDialog, MatPaginator} from '@angular/material';
import {select, Store} from '@ngrx/store';
import {AppState} from '../../store';
import {environment} from '../../../environments/environment';
import {ImageModalComponent} from '../image-modal/image-modal.component';
import {EmployeeModel} from '../../_models/api/employee.model';
import {
  selectEmployeeDocs,
  selectEmployeePage,
  selectLoadingEmployeePage
} from '../../store/services/employee-service/employee-service.selector';
import {DeleteEmployee, LoadEmployees} from '../../store/services/employee-service/employee-service.actions';
import {EmployeeFormModalComponent} from '../employee-form-modal/employee-form-modal.component';
import {PaginationModel} from '../../_models/api/pagination.model';
import {PageModel} from '../../_models/api/page.model';
import {Page, Pagination} from '../../_helpers';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit, AfterViewInit, Page {
  employees$: Observable<EmployeeModel[]>;
  page$: Observable<PageModel<EmployeeModel>>;
  loadingPage$: Observable<boolean>;

  srcImages: string;
  srcNotHaveAvatar: string;

  paginationModel: PaginationModel<EmployeeModel>;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    private dialog: MatDialog,
    private store: Store<AppState>,
    public pagination: Pagination) {
  }

  ngOnInit() {
    this.srcImages = environment.srcImages;
    this.srcNotHaveAvatar = environment.source.images.notHaveAvatar;
    this.employees$ = this.store.pipe(select(selectEmployeeDocs));
    this.page$ = this.store.pipe(select(selectEmployeePage));
    this.loadingPage$ = this.store.pipe(select(selectLoadingEmployeePage));
    this.paginationModel = new PaginationModel<EmployeeModel>();
    this.loadPage();
  }

  ngAfterViewInit(): void {

  }

  openDialog(employee: EmployeeModel): void {
    this.dialog.open(ImageModalComponent, {
      data: {srcImage: this.buildSrcAvatar(employee)}
    });
  }

  buildSrcAvatar(employee: EmployeeModel): string {
    return `${this.srcImages}/${employee.photo}`;
  }

  deleteEmployee(employee: EmployeeModel) {
    this.store.dispatch(new DeleteEmployee(employee));
  }

  editEmployee(employee: EmployeeModel) {
    this.dialog.open(EmployeeFormModalComponent, {
      data: employee,
      maxHeight: '90vh',
      maxWidth: 600
    });
  }

  loadPage() {
    this.paginationModel.setOptionsFromMatPaginator(this.paginator);
    this.store.dispatch(new LoadEmployees(this.paginationModel));
  }
}
