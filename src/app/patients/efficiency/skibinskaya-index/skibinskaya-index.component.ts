import {Component, OnInit} from '@angular/core';
import {PatientsService} from '../../patients.service';

@Component({
  selector: 'app-skibinskaya-index',
  templateUrl: './skibinskaya-index.component.html',
  styleUrls: ['./skibinskaya-index.component.css']
})
export class SkibinskayaIndexComponent implements OnInit {
  public DB;

  constructor(private patientsService: PatientsService) {
    this.DB = this.patientsService.getEfficiencyData();
  }

  ngOnInit() {
  }

}
