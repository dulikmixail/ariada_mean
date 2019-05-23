import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {Observable} from 'rxjs';
import {select, Store} from '@ngrx/store';

import {MatPaginator} from '@angular/material';
import {PatientModel} from '../../../../_models';
import {AppState} from '../../../../store';
import {selectPatientDocs, selectPatientLoadingPage} from '../../../../store/services/patient-service/patient-service.selector';

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.css']
})
export class PatientListComponent implements OnInit {
  @Input() pageSize: number;
  @Input() pageSizeOptions: number[];

  searchPatient$: Observable<PatientModel[]>;
  loadingPage$: Observable<boolean>;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private store: Store<AppState>) {
  }

  ngOnInit() {
    this.searchPatient$ = this.store.pipe(select(selectPatientDocs));
    this.loadingPage$ = this.store.pipe(select(selectPatientLoadingPage));
    // this.store.dispatch(new SearchPatients(new PaginationModel<PatientModel>()));
  }

}
