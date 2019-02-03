import {Component, OnInit} from '@angular/core';
import {PatientsService} from '../../patients.service';

@Component({
  selector: 'app-orthostatic-test',
  templateUrl: './orthostatic-test.component.html',
  styleUrls: ['./orthostatic-test.component.css']
})
export class OrthostaticTestComponent implements OnInit {
  public DB;

  constructor(private patientsService: PatientsService) {
    this.DB = this.patientsService.getEfficiencyData();
  }

  ngOnInit() {
  }

  addColumns() {
    this.DB.orthostaticTest.table.map((d, i) => {
      if (i === 0) {
        d.td = d.td.concat([{value: 'до', type: 'text'}, {value: 'після', type: 'text'}, {
          value: 'різниця',
          type: 'text'
        }, {value: 'висновки', type: 'text'}]);
      } else if (i === 8) {
        d.td = d.td.concat([{value: '-', type: 'select', values: [{value: '-'}, {value: 'пітливість'}, {value: 'інше'}]}, {
          value: '-',
          type: 'select',
          values: [{value: '-'}, {value: 'пітливість'}, {value: 'інше'}]
        }, {value: '', type: 'text'}, {value: '', type: 'text'}]);
      } else {
        d.td = d.td.concat([{value: '', type: d.type}, {value: '', type: d.type}, {value: '', type: 'text'}, {value: '', type: 'text'}]);
      }
    });
  }

  removeColumns() {
    if (this.DB.orthostaticTest.table[0].td.length <= 5) {
      return;
    }
    this.DB.orthostaticTest.table.map((d) => {
      d.td = d.td.slice(0, -4);
    });
  }

  calculateColumns() {
    this.DB.orthostaticTest.calculate();
  }

}
