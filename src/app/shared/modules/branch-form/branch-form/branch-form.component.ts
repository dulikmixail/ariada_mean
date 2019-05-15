import {Component, OnInit} from '@angular/core';

import {AddBranch, BranchServiceActionTypes} from '../../../../store/services/branch-service/branch-service.actions';

@Component({
  selector: 'app-branch-form',
  templateUrl: './branch-form.component.html',
  styleUrls: ['./branch-form.component.css']
})
export class BranchFormComponent implements OnInit {
  addBranchActionClass: any;
  addBranchSuccessActionType: string;

  constructor() {
  }

  ngOnInit() {
    this.addBranchSuccessActionType = BranchServiceActionTypes.AddBranchSuccess;
    this.addBranchActionClass = AddBranch;
  }

}
