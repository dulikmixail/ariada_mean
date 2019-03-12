import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {MatDialog, MatSnackBar} from '@angular/material';
import {FormGroupConverter} from '../../_helpers';
import {select, Store} from '@ngrx/store';
import {AppState} from '../../store';
import {environment} from '../../../environments/environment';
import {FormFile, FormFiles} from '../../_helpers/form-files';
import {Observable} from 'rxjs';
import {BranchModel} from '../../_models/api/branch.model';
import {PostModel} from '../../_models/api/post.model';
import {selectPostList} from '../../store/services/post-service/post-service.selector';
import {LoadBranches} from '../../store/services/branch-service/branch-service.actions';
import {LoadPosts} from '../../store/services/post-service/post-service.actions';
import {AddEmployee} from '../../store/services/employee-service/employee-service.actions';
import {ImageModalComponent} from '../image-modal/image-modal.component';

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
              private snackBar: MatSnackBar,
              private formBuilder: FormBuilder,
              private formGroupConverter: FormGroupConverter,
              private formFiles: FormFiles,
              private store: Store<AppState>) {
  }

  ngOnInit() {
    this.createForm();
    this.photoFile = new FormFile();
    this.photoFile.srcNotHave = environment.source.images.notHaveAvatar;
    this.educationFile = new FormFile();
    this.educationFile.srcNotHave = environment.source.images.notHaveAvatar;
    this.placeRefresherCoursesFile = new FormFile();
    this.placeRefresherCoursesFile.srcNotHave = environment.source.images.notHaveAvatar;

    this.branches$ = this.store.pipe(select(selectPostList));
    this.store.dispatch(new LoadBranches());
    this.posts$ = this.store.pipe(select(selectPostList));
    this.store.dispatch(new LoadPosts());

  }

  createForm() {
    this.form = this.formBuilder.group({
      photo: [''],
      itemNo: [''],
      employmentDate: [''],
      expirationDate: [''],
      surname: [''],
      name: [''],
      middleName: [''],
      birthDate: [''],
      residencePlace: [''],
      educationFile: [''],
      refresherCoursesDate: [''],
      placeRefresherCoursesFile: [''],
      branch: [''],
      post: ['']
    });
  }

  onSubmit() {
    if (this.form.invalid) {
      return;
    } else {
      const fd = this.formGroupConverter.load(this.form).toFormData();
      this.store.dispatch(new AddEmployee(fd));
      this.resetForm();
    }
  }

  resetForm() {
    this.form.reset();
    this.resetFormFiles();
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

  resetFormFiles() {
    this.photoFile.reset();
    this.educationFile.reset();
    this.placeRefresherCoursesFile.reset();
  }

  loadSourceFormFile(file: File, formFile: FormFile) {
    this.formFiles.loadSource(formFile, file);
  }
}
