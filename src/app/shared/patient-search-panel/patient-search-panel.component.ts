import {Component, OnInit} from '@angular/core';
import {PatientModel} from '../../_models/api/patient.model';
import {Observable} from 'rxjs';
import {FormBuilder} from '@angular/forms';
import {environment} from '../../../environments/environment';
import {select, Store} from '@ngrx/store';
import {AppState} from '../../store';
import {SearchPatientsSimply} from '../../store/services/patient-service/patient-service.actions';
import {selectLoadingPatientPage, selectPatientDocs} from '../../store/services/patient-service/patient-service.selector';

@Component({
  selector: 'app-patient-search-panel',
  templateUrl: './patient-search-panel.component.html',
  styleUrls: ['./patient-search-panel.component.css']
})
export class PatientSearchPanelComponent implements OnInit {
  searchPatientsSimply: any;
  srcImage: string;
  searchPatient$: Observable<PatientModel[]>;
  loadingPage$: Observable<boolean>;

  constructor(private formBuilder: FormBuilder,
              private store: Store<AppState>) {
  }

  ngOnInit() {
    this.searchPatientsSimply = SearchPatientsSimply;
    this.searchPatient$ = this.store.pipe(select(selectPatientDocs));
    this.loadingPage$ = this.store.pipe(select(selectLoadingPatientPage));
    this.srcImage = `${environment.srcImages}/${this.srcImage}`;
  }

}
