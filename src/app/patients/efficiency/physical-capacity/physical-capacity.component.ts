import {Component, OnInit} from '@angular/core';
import {PatientsService} from '../../patients.service';

@Component({
  selector: 'app-physical-capacity',
  templateUrl: './physical-capacity.component.html',
  styleUrls: ['./physical-capacity.component.css']
})
export class PhysicalCapacityComponent implements OnInit {
  public DB;

  constructor(private patientsService: PatientsService) {
    this.DB = this.patientsService.getEfficiencyData();
  }

  ngOnInit() {
  }

}
