import {Component, OnInit} from '@angular/core';
import {
  FormBuilder,
  FormGroup, FormGroupDirective,
  Validators
} from '@angular/forms';
import {FormGroupConverter} from '../../_helpers';
import {Store} from '@ngrx/store';
import {AppState} from '../../store';
import {Form} from '../../_helpers/form';
import {AddBranch} from '../../store/services/branch-service/branch-service.actions';

@Component({
  selector: 'app-branch-form',
  templateUrl: './branch-form.component.html',
  styleUrls: ['./branch-form.component.css']
})
export class BranchFormComponent implements OnInit {
  form: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private formGroupConverter: FormGroupConverter,
              private store: Store<AppState>,
              private formService: Form) {
  }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.form = this.formBuilder.group({
      title: ['', Validators.required]
    });
  }

  onSubmit(formDirective: FormGroupDirective) {
    this.formService.submit(formDirective, this.form, AddBranch);
  }

  resetForm() {
    this.form.reset();
  }
}
