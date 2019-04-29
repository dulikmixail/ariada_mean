import {Component, Input, OnInit} from '@angular/core';
import {PatientModel} from '../../_models/api/patient.model';
import {FormHelper} from '../../_helpers';

@Component({
  selector: 'app-patient-card-info-full-compact',
  templateUrl: './patient-card-info-full-compact.component.html',
  styleUrls: ['./patient-card-info-full-compact.component.css']
})
export class PatientCardInfoFullCompactComponent implements OnInit {
  @Input() patient: PatientModel;

  constructor(private formHelper: FormHelper) { }

  ngOnInit() {
    if (!this.patient) {
      this.patient = new PatientModel();
    }
  }

}
