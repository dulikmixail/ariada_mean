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
  items: PhRAllowed[];
  isAllowPhysicalRahabilitation;

  constructor(private phRAllowedService: PhRAllowedService) {
    this.source = phRAllowedService.getAll();
  }

  receiveItems($event) {
    this.items = $event;
    this.calcAllowPhysicalRahabilitation();
  }

  calcAllowPhysicalRahabilitation() {
    this.isAllowPhysicalRahabilitation = true;
    this.items.forEach(item => {
      this.isAllowPhysicalRahabilitation = this.isAllowPhysicalRahabilitation && item.isAllowed;
    });
  }


  ngOnInit() {
  }

}
