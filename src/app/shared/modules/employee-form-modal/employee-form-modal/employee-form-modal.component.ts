import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {EmployeeModel} from '../../../../_models';

@Component({
  selector: 'app-employee-form-modal',
  templateUrl: './employee-form-modal.component.html',
  styleUrls: ['./employee-form-modal.component.css']
})
export class EmployeeFormModalComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<EmployeeFormModalComponent>,
              @Inject(MAT_DIALOG_DATA) public data: EmployeeModel) {
  }

  ngOnInit() {
  }

}
