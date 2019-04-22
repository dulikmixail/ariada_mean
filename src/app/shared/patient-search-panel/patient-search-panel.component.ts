import {Component, OnInit} from '@angular/core';
import {PatientModel} from '../../_models/api/patient.model';
import {Observable} from 'rxjs';
import {FormBuilder} from '@angular/forms';
import {environment} from '../../../environments/environment';
import {select, Store} from '@ngrx/store';
import {AppState} from '../../store';
import {selectSearchPatients} from '../../store/services/patient-service/patient-service.selector';
import {SearchPatients} from '../../store/services/patient-service/patient-service.actions';

@Component({
  selector: 'app-patient-search-panel',
  templateUrl: './patient-search-panel.component.html',
  styleUrls: ['./patient-search-panel.component.css']
})
export class PatientSearchPanelComponent implements OnInit {
  searchPatients: any;
  srcImage: string;
  searchPatient$: Observable<PatientModel[]>;

  constructor(private formBuilder: FormBuilder,
              private store: Store<AppState>) {
  }

  ngOnInit() {
    this.searchPatients = SearchPatients;
    this.searchPatient$ = this.store.pipe(select(selectSearchPatients));
    this.srcImage = `${environment.srcImages}/${this.srcImage}`;
  }

}
