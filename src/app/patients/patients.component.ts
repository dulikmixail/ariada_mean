import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.css']
})
export class PatientsComponent implements OnInit {
  navLinks = [
    {routerLink: './anamnesis', label: 'Анамнез', active: true},
    {routerLink: './rehabilitation', label: 'Критерії реабілітації', active: false},
    {routerLink: './efficiency', label: 'Оцінка ефективності', active: false},
    {routerLink: './', label: 'Робота з біосигналами', active: false},
    {routerLink: './', label: 'Звіти', active: false},
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
