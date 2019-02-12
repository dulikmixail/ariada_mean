import {Component, OnInit, ViewChild} from '@angular/core';
import {MatDialog} from '@angular/material';
import {InfoModalComponent} from '../info-modal/info-modal.component';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Observable} from 'rxjs';
import {GenderModel} from '../../_models/api/gender.model';
import {select, Store} from '@ngrx/store';
import {selectGenderList} from '../../store/gender/gender.selector';
import {GetAllGenders} from '../../store/gender/gender.actions';
import {AppState} from '../../store';
import {PatientService} from '../../_services/api/patient/patient.service';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';

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
              private store: Store<AppState>,
              private patientService: PatientService) {
  }

  ngOnInit() {
    this.avatar = '/assets/images/test/shiba1.jpg';
    this.createForm();
    this.genders$ = this.store.pipe(select(selectGenderList));
    this.store.dispatch(new GetAllGenders());
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
      gender: '5c5eee395d30073a0b249a6a'
    });
  }

  onFileChange(event) {
    this.selectedFile = <File>event.target.files[0];
    this.form.get('photo').setValue(<File>event.target.files[0]);
  }

  openDialog(): void {
    this.dialog.open(InfoModalComponent);
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

    this.patientService.create(fd).subscribe(value => {
      console.log(value);
    });
  }

}
