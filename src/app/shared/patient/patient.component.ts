import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material';
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

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {
  form: FormGroup;
  avatar;

  genders$: Observable<GenderModel[]>;

  constructor(public dialog: MatDialog,
              private formBuilder: FormBuilder,
              private formGroupConverter: FormGroupConverter,
              private store: Store<AppState>) {
  }

  ngOnInit() {
    this.avatar = '/assets/images/test/shiba1.jpg';
    this.createForm();
    this.genders$ = this.store.pipe(select(selectGenderList));
    this.store.dispatch(new LoadGenders());
  }

  createForm() {
    this.form = this.formBuilder.group({
      photo: null,
      surname: ['1', Validators.required],
      name: ['2', Validators.required],
      middleName: ['3', Validators.required],
      birthDate: '4',
      permanentResidence: '5',
      addressOfRelativesAndFamily: '6',
      phoneNumbers: ['7', Validators.required],
      medicalCardNumber: '8',
      workplace: '9',
      workPost: '10',
      gender: ['5c6daa07833b661aba4a4286', Validators.required]
    });
  }

  onFileChange(event) {
    this.form.get('photo').setValue(<File>event.target.files[0]);
  }

  openDialog(): void {
    this.dialog.open(PatientAvatarModalComponent);
  }

  onSubmit() {
    if (this.form.invalid) {
      return;
    }

    const fd = this.formGroupConverter.load(this.form).toFormData();
    this.store.dispatch(new AddPatient(fd));
  }

  resetForm() {
    this.form.reset();
  }
}
