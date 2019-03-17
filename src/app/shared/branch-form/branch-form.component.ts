import {Component, OnInit, ViewChild} from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  NgForm,
  Validators
} from '@angular/forms';
import {FormGroupConverter} from '../../_helpers';
import {Store} from '@ngrx/store';
import {AppState} from '../../store';
import {AddBranch} from '../../store/services/branch-service/branch-service.actions';
import {BranchModel} from '../../_models/api/branch.model';
import {selectBranchFormIsReset} from '../../store/services/branch-service/branch-service.selector';

@Component({
  selector: 'app-branch-form',
  templateUrl: './branch-form.component.html',
  styleUrls: ['./branch-form.component.css']
})
export class BranchFormComponent implements OnInit {
  form: FormGroup;
  @ViewChild('ngForm') ngForm: NgForm;

  constructor(private formBuilder: FormBuilder,
              private formGroupConverter: FormGroupConverter,
              private store: Store<AppState>) {
  }

  ngOnInit() {
    this.store.select(selectBranchFormIsReset).subscribe(isReset => {
      if (isReset) {
        this.form.reset();
        this.ngForm.resetForm();
      }
    });
    this.createForm();
  }

  createForm() {
    this.form = this.formBuilder.group({
      title: ['', Validators.required]
    });
  }

  onSubmit() {
    const newBranch: BranchModel = this.form.value;
    this.store.dispatch(new AddBranch(newBranch));
  }

  resetForm() {
    this.form.reset();
  }
}
