import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.css']
})
export class PatientsComponent implements OnInit {
  navLinks = [
    { routerLink: './anamnesis', label: 'Анамнез' },
    { routerLink: './rehabilitation', label: 'Критерії реабілітації' },
    { routerLink: './efficiency', label: 'Оцінка ефективності' },
    { routerLink: './', label: 'Робота з біосигналами' },
    { routerLink: './', label: 'Звіти' },
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
