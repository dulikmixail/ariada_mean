import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, NgForm} from '@angular/forms';
import {MatDialog} from '@angular/material';
import {select, Store} from '@ngrx/store';
import {Observable} from 'rxjs';

import {AppState} from '../../store';
import {environment} from '../../../environments/environment';
import {FormFile, FormFiles, FormGroupConverter, SnackBar, FormHelper} from '../../_helpers';
import {BranchModel} from '../../_models/api/branch.model';
import {PostModel} from '../../_models/api/post.model';
import {selectPostList} from '../../store/services/post-service/post-service.selector';
import {LoadBranches} from '../../store/services/branch-service/branch-service.actions';
import {LoadPosts} from '../../store/services/post-service/post-service.actions';
import {AddEmployee} from '../../store/services/employee-service/employee-service.actions';
import {ImageModalComponent} from '../image-modal/image-modal.component';
import {selectBranchList} from '../../store/services/branch-service/branch-service.selector';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})
export class EmployeeFormComponent implements OnInit {
  form: FormGroup;
  branches$: Observable<BranchModel[]>;
  posts$: Observable<PostModel[]>;
  photoFile: FormFile;
  educationFile: FormFile;
  placeRefresherCoursesFile: FormFile;

  constructor(private dialog: MatDialog,
              private snackBar: SnackBar,
              private formBuilder: FormBuilder,
              private formGroupConverter: FormGroupConverter,
              private formFiles: FormFiles,
              private store: Store<AppState>,
              private formService: FormHelper) {
  }

  ngOnInit() {
    this.createForm();
    this.photoFile = new FormFile();
    this.photoFile.srcNotHave = environment.source.images.notHaveAvatar;
    this.educationFile = new FormFile();
    this.educationFile.srcNotHave = environment.source.images.notHaveAvatar;
    this.placeRefresherCoursesFile = new FormFile();
    this.placeRefresherCoursesFile.srcNotHave = environment.source.images.notHaveAvatar;

    this.branches$ = this.store.pipe(select(selectBranchList));
    this.store.dispatch(new LoadBranches());
    this.posts$ = this.store.pipe(select(selectPostList));
    this.store.dispatch(new LoadPosts());

  }

  createForm() {
    this.form = this.formBuilder.group({
      photo: [''],
      surname: ['23'],
      name: ['2312'],
      middleName: ['23'],
      itemNo: ['2'],
      employmentDate: ['2012-04-23'],
      expirationDate: ['2012-04-23'],
      birthDate: ['2012-04-23'],
      residencePlace: ['21123123'],
      educationFile: [''],
      refresherCoursesDate: ['2012-04-23'],
      placeRefresherCoursesFile: [''],
      branch: ['5c8d0f152bd07d15b078c7f6'],
      post: ['5c6daa07833b661aba4a4217']
    });
  }

  onSubmit(ngForm: NgForm) {
    this.formService.submitPromise(ngForm, this.form, AddEmployee)
      .then(() => this.resetForm())
      .catch(() => {
      });
  }

  resetFormFiles() {
    this.photoFile.reset();
    this.educationFile.reset();
    this.placeRefresherCoursesFile.reset();
  }

  resetForm() {
    this.resetFormFiles();
    this.form.reset();
  }

  onFileChange(event, controlName: string, formFile: FormFile, loadSource: boolean) {
    this.formFiles.loadImage(
      {
        images: event.target.files,
        form: this.form,
        formFile: formFile
      },
      controlName
    ).catch(() => {
      formFile.reset();
    }).then((file: File) => {
      if (loadSource) {
        this.loadSourceFormFile(file, formFile);
      }
    });
  }

  openDialog() {
    this.dialog.open(ImageModalComponent, {
      data: {srcImage: this.photoFile.src}
    });
  }

  loadSourceFormFile(file: File, formFile: FormFile) {
    this.formFiles.loadSource(formFile, file);
  }
}
