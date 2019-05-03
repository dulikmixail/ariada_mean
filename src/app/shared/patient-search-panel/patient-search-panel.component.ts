import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {PatientModel} from '../../_models/api/patient.model';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';
import {select, Store} from '@ngrx/store';
import {AppState} from '../../store';
import {LoadPatientPage, SearchPatientsSimply} from '../../store/services/patient-service/patient-service.actions';
import {
  selectLoadingPatientPage,
  selectPatientDocs,
  selectPatientPage
} from '../../store/services/patient-service/patient-service.selector';
import {PageModel} from '../../_models/api/page.model';
import {Page, Pagination} from '../../_helpers';
import {MatPaginator} from '@angular/material';
import {PaginationModel} from '../../_models/api/pagination.model';

@Component({
  selector: 'app-patient-search-panel',
  templateUrl: './patient-search-panel.component.html',
  styleUrls: ['./patient-search-panel.component.css']
})
export class PatientSearchPanelComponent implements OnInit, Page {
  @Input() pageSize: number;
  @Input() pageSizeOptions: number[];

  searchPatientsSimply: any;
  srcImage: string;
  searchPatient$: Observable<PatientModel[]>;
  loadingPage$: Observable<boolean>;
  page$: Observable<PageModel<PatientModel>>;
  paginationModel: PaginationModel<PatientModel> = new PaginationModel<PatientModel>();

  @ViewChild(MatPaginator) paginator: MatPaginator;

  @Output() clickPatient = new EventEmitter<PatientModel>();

  constructor(private store: Store<AppState>,
              public pagination: Pagination) {
  }

  ngOnInit() {
    this.searchPatientsSimply = SearchPatientsSimply;
    this.searchPatient$ = this.store.pipe(select(selectPatientDocs));
    this.loadingPage$ = this.store.pipe(select(selectLoadingPatientPage));
    this.page$ = this.store.pipe(select(selectPatientPage));
    this.srcImage = `${environment.srcImages}/${this.srcImage}`;
    if (this.pageSize) {
      this.pagination.pageSize = this.pageSize;
    }
    if (this.pageSizeOptions) {
      this.pagination.pageSizeOptions = this.pageSizeOptions;
    }
  }

  loadPage() {
    this.paginationModel.setOptionsFromMatPaginator(this.paginator);
    this.store.dispatch(new LoadPatientPage(this.paginationModel));
  }

}
