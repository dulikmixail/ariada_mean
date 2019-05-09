import {Component, Input, OnInit} from '@angular/core';
import {PatientModel} from '../../_models/api/patient.model';
import {Observable} from 'rxjs';
import {select, Store} from '@ngrx/store';
import {AppState} from '../../store';
import {LoadPatientPage} from '../../store/services/patient-service/patient-service.actions';
import {
  selectPatientPage
} from '../../store/services/patient-service/patient-service.selector';
import {PageModel} from '../../_models/api/page.model';
import {Page, Pagination} from '../../_helpers';
import {PaginationModel} from '../../_models/api/pagination.model';

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

  constructor(private store: Store<AppState>) {
  }

  ngOnInit() {
    this.page$ = this.store.pipe(select(selectPatientPage));
  }

  loadPage($event) {
    Pagination.setPaginationOptionsFromMatPaginator(this.paginationModel, $event);
    this.store.dispatch(new LoadPatientPage(this.paginationModel));
  }

  search($event: string) {
    // this.store.dispatch(new SearchPatientsSimply($event));
  }
}
