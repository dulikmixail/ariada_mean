import {Component, OnInit} from '@angular/core';
import {PatientsService} from '../../patients.service';

@Component({
  selector: 'app-robinson-index',
  templateUrl: './robinson-index.component.html',
  styleUrls: ['./robinson-index.component.css']
})
export class RobinsonIndexComponent implements OnInit {
  public DB;

  constructor(private patientsService: PatientsService) {
    this.DB = this.patientsService.getEfficiencyData();
  }

  ngOnInit() {
  }

  addColumns() {
    this.DB.robinsonIndex.table.map((d, i) => {
      if (i === 0) {
        d.td = d.td.concat([{value: 'до', type: 'text'}, {value: 'після', type: 'text'}, {value: '3-5хв', type: 'text'}]);
      } else {
        d.td = d.td.concat([{value: '', type: d.type}, {value: '', type: d.type}, {value: '', type: d.type}]);
      }
    });
  }

  removeColumns() {
    if (this.DB.robinsonIndex.table[0].td.length <= 4) {
      return;
    }
    this.DB.robinsonIndex.table.map((d) => {
      d.td = d.td.slice(0, -3);
    });
  }

  calculateColumns() {
    this.DB.robinsonIndex.table[0].td.map((d, i) => {
      if (i === 0) {
        return;
      }
      this.DB.robinsonIndex.table[6].td[i].value = '';
      this.DB.robinsonIndex.table[7].td[i].value = '';
      const sustola = +this.DB.robinsonIndex.table[5].td[i].value.replace(',', '.') || 0; // .getText(5, col))
      const hateRate = +this.DB.robinsonIndex.table[4].td[i].value.replace(',', '.') || 0;
      const value = (sustola * hateRate) / 100 || 0;
      if (!value) {
        this.DB.robinsonIndex.table[5].td[i].value = '';
        this.DB.robinsonIndex.table[4].td[i].value = '';
        return;
      }
      this.DB.robinsonIndex.table[6].td[i].value = value.toFixed(3);
      const result = this.DB.robinsonIndex.calculate(this.DB.robinsonIndex.table[6].td[i].value);
      this.DB.robinsonIndex.table[7].td[i].value = result || '';
    });
  }

}
