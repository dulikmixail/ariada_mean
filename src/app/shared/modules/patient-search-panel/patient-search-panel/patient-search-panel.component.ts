import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {PatientModel} from '../../../../_models/api/patient.model';
import {Observable} from 'rxjs';
import {select, Store} from '@ngrx/store';
import {AppState} from '../../../../store';
import {LoadPatientPage, SearchPatients} from '../../../../store/services/patient-service/patient-service.actions';
import {
  selectPatientPage
} from '../../../../store/services/patient-service/patient-service.selector';
import {PageModel} from '../../../../_models/api/page.model';
import {Page, Pagination} from '../../../../_helpers';
import {PaginationModel, SearchTextQuery} from '../../../../_models/api/pagination.model';
import {MatPaginator} from '@angular/material';

@Component({
  selector: 'app-patient-search-panel',
  templateUrl: './patient-search-panel.component.html',
  styleUrls: ['./patient-search-panel.component.css']
})
export class PatientSearchPanelComponent implements OnInit, Page {
  @Input() pageSize: number;
  @Input() pageSizeOptions: number[];

  page$: Observable<PageModel<PatientModel>>;
  paginationModel: PaginationModel<PatientModel> = new PaginationModel<PatientModel>();

  @Output() search = new EventEmitter<string>();

  constructor(private store: Store<AppState>) {
  }

  ngOnInit() {
    this.page$ = this.store.pipe(select(selectPatientPage));
  }

  loadPage(matPaginator: MatPaginator) {
    Pagination.setPaginationOptionsFromMatPaginator(this.paginationModel, matPaginator);
    this.store.dispatch(new LoadPatientPage(this.paginationModel));
  }

  searchPatient($event: string) {
    this.search.emit($event);
    this.paginationModel.query = new SearchTextQuery($event);
    this.store.dispatch(new SearchPatients(this.paginationModel));
  }
}
