import {Component, Input, OnInit, Output} from '@angular/core';
import {environment} from '../../../environments/environment';
import {MatSnackBar} from '@angular/material';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-form-file-input',
  templateUrl: './form-file-input.component.html',
  styleUrls: ['./form-file-input.component.css']
})
export class FormFileInputComponent implements OnInit {
  @Input() formControlName: string;
  @Input() placeholder: string;
  @Input() loadSource: boolean;
  @Input() accept: string;
  @Input() form: FormGroup;
  @Input() matIcon: string;
  @Input() buttonValue: string;
  @Output() formFileInput: FormFileInput;

  constructor(private snackBar: MatSnackBar) {
  }

  ngOnInit() {
    this.initAccept();
    this.loadSource = false;
  }

  private initAccept() {
    this.accept.replace('image/*', 'image/x-png,image/jpeg,image/png');
  }

  private onFileChange($event) {
    if ($event.target.files.lenth > 0) {
      const file: File = $event.target.files[0];
      this.loadFile(file);
      if (this.loadSource) {
        this.loadSourceFile(file);
      }
    }

  }

  private readFile(file): Promise<any> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        resolve(reader.result);
      };
      reader.onabort = () => {
        reject(reader.error);
      };
    });
  }

  private loadSourceFile(file: File) {
    this.readFile(file)
      .then((result) => {
        this.formFileInput.src = result;
      })
      .catch(() => {
        this.snackBar.open(environment.errors['3'], environment.errors['1']);
      });
  }

  private loadFile(file: File) {
    if (this.accept.includes(file.type)) {
      this.form.get(this.formControlName).setValue(file);
      this.formFileInput.selectedName = file.name;
    } else {
      this.snackBar.open(environment.errors['4'], environment.errors['1']);
      this.reset();
    }
  }

  reset() {
    this.formFileInput.reset();
  }
}

export class FormFileInput {
  src: string | ArrayBuffer;
  srcNotHave: string | ArrayBuffer;
  selectedName: string;

  reset() {
    this.selectedName = '';
    this.src = '';
  }
}
