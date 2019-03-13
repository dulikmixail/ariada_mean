import {Component, OnInit} from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';
import {FormGroupConverter} from '../../_helpers';
import {Store} from '@ngrx/store';
import {AppState} from '../../store';
import {AddPatient} from '../../store/services/patient-service/patient-service.actions';

@Component({
  selector: 'app-branch-form',
  templateUrl: './branch-form.component.html',
  styleUrls: ['./branch-form.component.css']
})
export class BranchFormComponent implements OnInit {
  form: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private formGroupConverter: FormGroupConverter,
              private store: Store<AppState>) {
  }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.form = this.formBuilder.group({
      title: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.form.invalid) {
      return;
    } else {
      const fd = this.formGroupConverter.load(this.form).toFormData();
      this.store.dispatch(new AddPatient(fd));
      formDirective.resetForm();
      this.resetForm();
    }
  }

  resetForm() {

  }
}
