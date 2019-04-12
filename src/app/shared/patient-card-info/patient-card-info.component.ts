import {Component, Input, OnInit} from '@angular/core';
import {environment} from '../../../environments/environment';
import {PatientModel} from '../../_models/api/patient.model';

@Component({
  selector: 'app-patient-card-info',
  templateUrl: './patient-card-info.component.html',
  styleUrls: ['./patient-card-info.component.css']
})
export class PatientCardInfoComponent implements OnInit {
  srcImage: string;
  @Input() patient: PatientModel;


  constructor() {
  }

  ngOnInit() {
    if (this.patient.photo) {
      this.srcImage = `${environment.srcImages}/${this.patient.photo}`;
    }
  }

}
