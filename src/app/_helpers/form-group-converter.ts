import {FormGroup} from '@angular/forms';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormGroupConverter {
  private formGroup: FormGroup;

  constructor() {
  }

  load(formGroup: FormGroup): FormGroupConverter {
    this.formGroup = formGroup;
    return this;
  }

  toFormData(): FormData {
    const fd = new FormData();
    Object.getOwnPropertyNames(this.formGroup.controls).forEach(controlName => {
      const value = this.formGroup.get(controlName).value;
      if (!!value) {
        fd.append(controlName, value);
      }
    });
    return fd;
  }
}
