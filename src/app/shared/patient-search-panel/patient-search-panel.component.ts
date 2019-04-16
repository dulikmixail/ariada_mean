import {Component, OnInit} from '@angular/core';
import {PatientModel} from '../../_models/api/patient.model';
import {Observable} from 'rxjs';
import {PatientService} from '../../_services/api/patient/patient.service';
import {FormBuilder, FormGroup} from '@angular/forms';
import {environment} from '../../../environments/environment';
import {select, Store} from '@ngrx/store';
import {AppState} from '../../store';
import {selectFilterPatients} from '../../store/services/patient-service/patient-service.selector';
import {FilterPatients} from '../../store/services/patient-service/patient-service.actions';

@Component({
  selector: 'app-patient-search-panel',
  templateUrl: './patient-search-panel.component.html',
  styleUrls: ['./patient-search-panel.component.css']
})
export class PatientSearchPanelComponent implements OnInit {
  srcImage: string;
  form: FormGroup;
  filteredPatient$: Observable<PatientModel[]>;

  constructor(private patientService: PatientService,
              private formBuilder: FormBuilder,
              private store: Store<AppState>) {
  }

  ngOnInit() {
    this.filteredPatient$ = this.store.pipe(select(selectFilterPatients));
    this.srcImage = `${environment.srcImages}/${this.srcImage}`;
    this.form = this.formBuilder.group({
      surname: [''],
      name: [''],
      middleName: ['']
    });
  }

  filter() {
    const filteredValue = {};
    Object.entries(this.form.value).forEach(value => {
      if (value[1]) {
        filteredValue[value[0]] = value[1];
      }
    });
    this.store.dispatch(new FilterPatients(filteredValue));
    // this.filteredPatient$ = this.patientService.filter(filteredValue);
  }
}
