import {Component, Input, OnInit} from '@angular/core';
import {CustomValidators} from '../../../../_helpers';

@Component({
  selector: 'app-progress-spinner',
  templateUrl: './progress-spinner.component.html',
  styleUrls: ['./progress-spinner.component.css']
})
export class ProgressSpinnerComponent implements OnInit {

  @Input() size: string;
  diameter: number;

  constructor() {
  }

  ngOnInit() {
    CustomValidators.inputFieldRequired(this.size, 'size');
    switch (this.size) {
      case 'small':
        this.diameter = 50;
        break;
      case 'middle':
        this.diameter = 75;
        break;
      case 'big':
        this.diameter = 100;
        break;
      default:
        this.diameter = 50;
    }
  }


}
