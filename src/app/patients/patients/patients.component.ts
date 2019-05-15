import {Component, OnInit} from '@angular/core';
import {PatientsNavLink, PatientsNavLinkModule} from '../patients-nav-link.module';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.css']
})
export class PatientsComponent implements OnInit {
  navLinks: PatientsNavLink[];

  constructor(public patientsNavLinkModule: PatientsNavLinkModule) {
    this.navLinks = patientsNavLinkModule.navLinks;
  }

  ngOnInit() {
  }

}
