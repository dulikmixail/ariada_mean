import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatDialog, MatSnackBar} from '@angular/material';
import {FormGroupConverter} from '../../_helpers';
import {Store} from '@ngrx/store';
import {AppState} from '../../store';
import {environment} from '../../../environments/environment';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})
export class EmployeeFormComponent implements OnInit {
  srcAvatar: string | ArrayBuffer;
  srcNotHaveAvatar: string;
  form: FormGroup;
  selectedFileName: string;

  constructor(private dialog: MatDialog,
              private snackBar: MatSnackBar,
              private formBuilder: FormBuilder,
              private formGroupConverter: FormGroupConverter,
              private store: Store<AppState>) {
  }

  ngOnInit() {
    this.createForm();
    this.srcNotHaveAvatar = environment.source.images.notHaveAvatar;
  }

  createForm() {
    this.form = this.formBuilder.group({
      photo: [''],
      surname: ['', Validators.required],
      name: ['', Validators.required],
      middleName: ['', Validators.required],
      birthDate: [''],
      permanentResidence: '',
      addressOfRelativesAndFamily: '',
      phoneNumbers: ['', Validators.required],
      medicalCardNumber: '',
      workplace: '',
      workPost: '',
      gender: ['', Validators.required]
    });
  }

  onSubmit() {

  }

  resetForm() {

  }

  onFileChange($event: Event) {

  }

  openDialog() {

  }
}
