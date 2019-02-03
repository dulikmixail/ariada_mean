import {Component, OnInit} from '@angular/core';
import {PatientsService} from '../../patients.service';

@Component({
  selector: 'app-martine-kushelevsky-test',
  templateUrl: './martine-kushelevsky-test.component.html',
  styleUrls: ['./martine-kushelevsky-test.component.css']
})
export class MartineKushelevskyTestComponent implements OnInit {
  public DB;

  constructor(private patientsService: PatientsService) {
    this.DB = this.patientsService.getEfficiencyData();
  }

  ngOnInit() {
  }

  addColumns() {
    this.DB.martineKushelevskyTest.table.map((d, i) => {
      d.td = d.td.concat([{value: '', type: d.type}]);
    });
  }

  removeColumns() {
    if (this.DB.martineKushelevskyTest.table[0].td.length <= 2) {
      return;
    }
    this.DB.martineKushelevskyTest.table.map((d) => {
      d.td = d.td.slice(0, -1);
    });
  }


  calculateColumns() {
    this.DB.martineKushelevskyTest.calculate();
  }

}
