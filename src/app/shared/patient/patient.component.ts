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

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {
  srcAvatar: string | ArrayBuffer;
  srcNotHaveAvatar: string;
  form: FormGroup;
  genders$: Observable<GenderModel[]>;
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
    this.genders$ = this.store.pipe(select(selectGenderList));
    this.store.dispatch(new LoadGenders());
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

  onFileChange(event) {
    const files = event.target.files;
    if (files && event.target.files.length > 0) {
      const selectedFile: File = <File>files[0];
      if (selectedFile.type.match(/image\/*/) == null) {
        this.resetAvatar();
        this.snackBar.open('Підтримуються лише зображення.', 'Помилка');
      } else {
        this.previewAvatar(files);
        this.form.get('photo').setValue(selectedFile);
        this.selectedFileName = selectedFile.name;
      }
    }
  }

  openDialog(): void {
    this.dialog.open(PatientAvatarModalComponent, {
      data: {srcImage: this.srcAvatar}
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
    this.resetAvatar();
    this.createForm();
  }

  resetAvatar() {
    this.selectedFileName = '';
    this.srcAvatar = '';
  }

  previewAvatar(files) {
    const reader = new FileReader();
    reader.readAsDataURL(files[0]);
    reader.onload = () => {
      this.srcAvatar = reader.result;
    };
  }
}
