import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatDialog, MatSnackBar} from '@angular/material';
import {FormGroupConverter} from '../../_helpers';
import {Store} from '@ngrx/store';
import {AppState} from '../../store';
import {environment} from '../../../environments/environment';
import {FormFile, FormFiles} from '../../_helpers/form-files';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})
export class EmployeeFormComponent implements OnInit {
  form: FormGroup;

  constructor(private dialog: MatDialog,
              private snackBar: MatSnackBar,
              private formBuilder: FormBuilder,
              private formGroupConverter: FormGroupConverter,
              private formFiles: FormFiles,
              private store: Store<AppState>,
              private avatarFile: FormFile) {
  }

  ngOnInit() {
    this.createForm();
    this.avatarFile.srcNotHave = environment.source.images.notHaveAvatar;
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

  resetAvatar() {
    this.avatarFile.selectedName = '';
    this.avatarFile.src = '';
  }

  previewAvatar(file) {
    this.formFiles.loadSource(this.avatarFile, file);
  }
}
