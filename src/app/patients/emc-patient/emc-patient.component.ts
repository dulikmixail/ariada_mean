import {Component, OnInit} from '@angular/core';
import {PatientModel} from '../../_models';
import {Observable} from 'rxjs';
import {select, Store} from '@ngrx/store';
import {selectPatientDocs, selectPatientLoadingPage} from '../../store/services/patient-service/patient-service.selector';
import {AppState} from '../../store';


@Component({
  selector: 'app-emc-patient',
  templateUrl: './emc-patient.component.html',
  styleUrls: ['./emc-patient.component.css']
})
export class EmcPatientComponent implements OnInit {
  searchPatient$: Observable<PatientModel[]>;
  loadingPage$: Observable<boolean>;
  patient: PatientModel;

  constructor(private store: Store<AppState>) {
  }

  ngOnInit() {
    this.searchPatient$ = this.store.pipe(select(selectPatientDocs));
    this.loadingPage$ = this.store.pipe(select(selectPatientLoadingPage));
  }

  testClick($event: PatientModel) {
    this.patient = $event;
    console.log($event);
  }

  resetSelectPatient() {
    this.patient = new PatientModel();
  }
}
