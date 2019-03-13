import {Injectable} from '@angular/core';
import {FormGroup, FormGroupDirective} from '@angular/forms';
import {FormGroupConverter} from './form-group-converter';
import {Action, Store} from '@ngrx/store';
import {AppState} from '../store';

@Injectable({
  providedIn: 'root'
})
export class Form {

  constructor(private formGroupConverter: FormGroupConverter,
              private store: Store<AppState>) {

  }

  submit(formDirective: FormGroupDirective, form: FormGroup, action: Action): Promise<boolean> {
    return new Promise<boolean>((resolve, reject) => {
      if (form.invalid) {
        reject(false);
      } else {
        const fd = this.formGroupConverter.load(form).toFormData();
        this.store.dispatch(new action(fd));
        formDirective.resetForm();
        this.resetForm();
      }
    });
  }
}
