import {Component, OnInit} from '@angular/core';
import {PatientModel} from '../../_models/api/patient.model';


@Component({
  selector: 'app-emc-patient',
  templateUrl: './emc-patient.component.html',
  styleUrls: ['./emc-patient.component.css']
})
export class EmcPatientComponent implements OnInit {
  patient: PatientModel;
  loading = false;
  constructor() {
  }

  ngOnInit() {
    this.loading = true;
  }

  testClick($event: PatientModel) {
    this.patient = $event;
    console.log($event);
  }
}
