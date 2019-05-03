import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {Observable} from 'rxjs';
import {PatientModel} from '../../_models/api/patient.model';
import {PageModel} from '../../_models/api/page.model';
import {PaginationModel} from '../../_models/api/pagination.model';
import {select, Store} from '@ngrx/store';
import {AppState} from '../../store';
import {Pagination} from '../../_helpers';
import {LoadPatientPage, SearchPatients, SearchPatientsSimply} from '../../store/services/patient-service/patient-service.actions';
import {
  selectLoadingPatientPage,
  selectPatientDocs,
  selectPatientPage
} from '../../store/services/patient-service/patient-service.selector';
import {MatPaginator} from '@angular/material';
import {EmployeeModel} from '../../_models/api/employee.model';

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.css']
})
export class PatientListComponent implements OnInit {
  @Input() pageSize: number;
  @Input() pageSizeOptions: number[];

  searchPatientsSimply: any;
  searchPatient$: Observable<PatientModel[]>;
  loadingPage$: Observable<boolean>;
  page$: Observable<PageModel<PatientModel>>;
  paginationModel: PaginationModel<PatientModel> = new PaginationModel<PatientModel>();

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private store: Store<AppState>,
              public pagination: Pagination) {
  }

  ngOnInit() {
    this.searchPatientsSimply = SearchPatientsSimply;
    this.searchPatient$ = this.store.pipe(select(selectPatientDocs));
    this.loadingPage$ = this.store.pipe(select(selectLoadingPatientPage));
    this.page$ = this.store.pipe(select(selectPatientPage));
    this.store.dispatch(new SearchPatients(new PaginationModel<EmployeeModel>()));
  }

  loadPage() {
    this.paginationModel.setOptionsFromMatPaginator(this.paginator);
    this.store.dispatch(new LoadPatientPage(this.paginationModel));
  }

}
