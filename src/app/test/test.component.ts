import {Component, OnInit} from '@angular/core';
import {PatientModel} from '../_models';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  patient: PatientModel;

  constructor() {
  }

  ngOnInit() {
    this.patient = new PatientModel();
    this.patient.photo = 'c596ce32af75d5acc3811ea447e7d274.jpg';
    this.patient.surname = 'surnamesurnamesurnamesurnamesurname';
    this.patient.name = 'namenamenamenamename';
    this.patient.middleName = 'middleNamemiddleNamemiddleNamemiddleName';
  }

  testClick($event: PatientModel) {
    console.log($event);
  }
}
