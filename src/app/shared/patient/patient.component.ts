import {Component, OnInit} from '@angular/core';
import {MatDialog, MatSnackBar} from '@angular/material';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {select, Store} from '@ngrx/store';
import {Observable} from 'rxjs';

import {GenderModel} from '../../_models/api/gender.model';
import {FormGroupConverter} from '../../_helpers';
import {PatientAvatarModalComponent} from '../patient-avatar-modal/patient-avatar-modal.component';
import {AppState} from '../../store';
import {LoadGenders} from '../../store/services/gender-service/gender-service.actions';
import {selectGenderList} from '../../store/services/gender-service/gender-service.selector';
import {AddPatient} from '../../store/services/patient-service/patient-service.actions';
import {environment} from '../../../environments/environment';
import {FormFile, FormFiles} from '../../_helpers/form-files';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {
  form: FormGroup;
  genders$: Observable<GenderModel[]>;

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
    this.genders$ = this.store.pipe(select(selectGenderList));
    this.store.dispatch(new LoadGenders());
  }

  createForm() {
    this.form = this.formBuilder.group({
      photo1: [''],
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

  onFileChange(event) {
    this.formFiles.loadImage({
      images: event.target.files,
      form: this.form,
      formFile: this.avatarFile
    }).catch(() => {
      this.avatarFile.reset();
    }).then((file: File) => {
      this.previewAvatar(file);
    });
  }

  openDialog(): void {
    this.dialog.open(PatientAvatarModalComponent, {
      data: {srcImage: this.avatarFile.src}
    });
  }

  onSubmit() {
    if (this.form.invalid) {
      return;
    } else {
      const fd = this.formGroupConverter.load(this.form).toFormData();
      this.store.dispatch(new AddPatient(fd));
      this.resetForm();
    }
  }

  resetForm() {
    this.avatarFile.reset();
    this.createForm();
  }

  previewAvatar(file) {
    this.formFiles.loadSource(this.avatarFile, file);
  }
}
