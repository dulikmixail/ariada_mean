import {Component, OnInit} from '@angular/core';
import {PhRAllowedService} from '../../../_services/api/ph_r_allowed/ph-r-allowed.service';
import {PhRAllowed} from '../../../_models/api/ph-r-allowed';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-step-two',
  templateUrl: './step-two.component.html',
  styleUrls: ['./step-two.component.css']
})
export class StepTwoComponent implements OnInit {
  source: Observable<PhRAllowed[]>;
  items: any[];

  constructor(private phRAllowedService: PhRAllowedService) {
    this.source = phRAllowedService.getAll();
  }

  receiveItems($event) {
    this.items = $event;
    console.log(this.items);
  }

  ngOnInit() {
  }

}
