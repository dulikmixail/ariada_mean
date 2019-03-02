import {Component, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {AppState} from '../../store';
import {Observable} from 'rxjs';
import {PatientModel} from '../../_models/api/patient.model';
import {selectPatientList} from '../../store/services/patient-service/patient-service.selector';
import {LoadPatients} from '../../store/services/patient-service/patient-service.actions';

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.css']
})
export class PatientListComponent implements OnInit {
  patients$: Observable<PatientModel[]>;

  constructor(private store: Store<AppState>) {
  }

  ngOnInit() {
    this.patients$ = this.store.pipe(select(selectPatientList));
    this.store.dispatch(new LoadPatients());
  }

}
