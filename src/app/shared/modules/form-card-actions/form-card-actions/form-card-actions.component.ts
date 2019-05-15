import {Component, Input, OnInit} from '@angular/core';
import {MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-form-card-actions',
  templateUrl: './form-card-actions.component.html',
  styleUrls: ['./form-card-actions.component.css']
})
export class FormCardActionsComponent implements OnInit {
  @Input() isUpdate: boolean;
  @Input() dialogRef: MatDialogRef<any>;

  constructor() {
  }

  ngOnInit() {
  }

}
