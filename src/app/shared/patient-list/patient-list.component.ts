import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {PatientModel} from '../../_models/api/patient.model';

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.css']
})
export class PatientListComponent implements OnInit {
  patients$: Observable<PatientModel[]>;
  constructor() {
  }

  ngOnInit() {
  }

}
