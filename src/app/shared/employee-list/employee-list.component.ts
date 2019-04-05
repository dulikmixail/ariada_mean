import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {MatDialog} from '@angular/material';
import {select, Store} from '@ngrx/store';
import {AppState} from '../../store';
import {environment} from '../../../environments/environment';
import {ImageModalComponent} from '../image-modal/image-modal.component';
import {EmployeeModel} from '../../_models/api/employee.model';
import {selectEmployeeList} from '../../store/services/employee-service/employee-service.selector';
import {DeleteEmployee, LoadEmployees} from '../../store/services/employee-service/employee-service.actions';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  employees$: Observable<EmployeeModel[]>;
  srcImages: string;
  srcNotHaveAvatar: string;

  constructor(
    private dialog: MatDialog,
    private store: Store<AppState>) {
  }

  ngOnInit() {
    this.srcImages = environment.srcImages;
    this.employees$ = this.store.pipe(select(selectEmployeeList));
    this.store.dispatch(new LoadEmployees());
    this.srcNotHaveAvatar = environment.source.images.notHaveAvatar;
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

  }
}
