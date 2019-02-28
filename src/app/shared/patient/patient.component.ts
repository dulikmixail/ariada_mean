import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Observable} from 'rxjs';
import {GenderModel} from '../../_models/api/gender.model';
import {select, Store} from '@ngrx/store';
import {selectGenderList} from '../../store/gender/gender.selector';
import {LoadGenders} from '../../store/gender/gender.actions';
import {AppState} from '../../store';
import {PatientAvatarModalComponent} from '../patient-avatar-modal/patient-avatar-modal.component';
import {AddPatient} from '../../store/patient/patient.actions';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {
  form: FormGroup;
  avatar;
  selectedFile;

  genders$: Observable<GenderModel[]>;

  constructor(public dialog: MatDialog,
              private formBuilder: FormBuilder,
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
      birthDate: '5',
      permanentResidence: '6',
      addressOfRelativesAndFamily: '7',
      phoneNumbers: ['8', Validators.required],
      medicalCardNumber: '9',
      workplace: '10',
      workPost: '11',
      gender: '5c6daa07833b661aba4a4287'
    });
  }

  onFileChange(event) {
    this.selectedFile = <File>event.target.files[0];
    this.form.get('photo').setValue(<File>event.target.files[0]);
  }

  openDialog(): void {
    this.dialog.open(PatientAvatarModalComponent);
  }

  onSubmit() {
    const fd = new FormData();
    fd.append('photo', this.form.get('photo').value);
    fd.append('surname', this.form.get('surname').value);
    fd.append('name', this.form.get('name').value);
    fd.append('middleName', this.form.get('middleName').value);
    fd.append('birthDate', this.form.get('birthDate').value);
    fd.append('permanentResidence', this.form.get('permanentResidence').value);
    fd.append('addressOfRelativesAndFamily', this.form.get('addressOfRelativesAndFamily').value);
    fd.append('phoneNumbers', this.form.get('phoneNumbers').value);
    fd.append('medicalCardNumber', this.form.get('medicalCardNumber').value);
    fd.append('workplace', this.form.get('workplace').value);
    fd.append('workPost', this.form.get('workPost').value);
    fd.append('gender', this.form.get('gender').value);

    this.store.dispatch(new AddPatient(fd));
  }

}
