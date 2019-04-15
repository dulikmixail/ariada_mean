import {Component, Input, OnInit} from '@angular/core';
import {PatientModel} from '../../_models/api/patient.model';

@Component({
  selector: 'app-patient-card-info',
  templateUrl: './patient-card-info.component.html',
  styleUrls: ['./patient-card-info.component.css']
})
export class PatientCardInfoComponent implements OnInit {
  readonly DEFAULT_SIZE = 40;
  @Input() patient: PatientModel;
  @Input() size: number;

  constructor() {
  }

  ngOnInit() {
    if (!this.size) {
      this.size = this.DEFAULT_SIZE;
    }
  }

}
