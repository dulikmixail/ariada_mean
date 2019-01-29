import {Component, OnInit} from '@angular/core';
import {PhRSubGroupService} from '../../../_services/api/ph_r_sub_group/ph-r-sub-group.service';
import {PhRSubGroup} from '../../../_models/api/ph-r-sub-group';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-step-one',
  templateUrl: './step-one.component.html',
  styleUrls: ['./step-one.component.css']
})
export class StepOneComponent implements OnInit {
  source: Observable<PhRSubGroup[]>;
  items: PhRSubGroup[];

  constructor(private phRSubGroupService: PhRSubGroupService) {
    this.source = phRSubGroupService.getAll();
  }

  receiveItems($event) {
    this.items = $event;
  }

  ngOnInit() {
  }

}
