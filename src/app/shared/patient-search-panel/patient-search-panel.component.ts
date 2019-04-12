import {Component, OnInit} from '@angular/core';
import {PatientModel} from '../../_models/api/patient.model';
import {Observable} from 'rxjs';
import {PatientService} from '../../_services/api/patient/patient.service';
import {FormBuilder, FormGroup} from '@angular/forms';
import {environment} from '../../../environments/environment';

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
              private formBuilder: FormBuilder) {
  }

  ngOnInit() {
      this.srcImage = `${environment.srcImages}/${this.srcImage}`;
    this.form = this.formBuilder.group({
      surname: [''],
      name: [''],
      middleName: ['']
    });
  }

  filter() {
    this.filteredPatient$ = this.patientService.find(this.form.value);
  }
}
