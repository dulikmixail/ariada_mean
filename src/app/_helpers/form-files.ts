import {FormGroup} from '@angular/forms';
import {Injectable} from '@angular/core';
import {MatSnackBar} from '@angular/material';
import {environment} from '../../environments/environment';

export interface ImageLoader {
  form: FormGroup;
  images: File[];
  formFile: FormFile;
}

export interface FormFile {
  src: string | ArrayBuffer;
  srcNotHave: string | ArrayBuffer;
  selectedName: string;
}

@Injectable({
  providedIn: 'root'
})
export class FormFile implements FormFile {
  reset() {
    this.selectedName = '';
    this.src = '';
  }
}


@Injectable({
  providedIn: 'root'
})
export class FormFiles {
  constructor(private snackBar: MatSnackBar) {
  }

  loadImage(imageLoader: ImageLoader): Promise<File> {
    return new Promise((resolve, reject) => {
      const messageError = 'Підтримуються лише зображення.';
      const files = imageLoader.images;
      if (files && files.length > 0) {
        const firstFile: File = <File>files[0];
        if (firstFile.type.match(/image\/*/) == null) {
          this.snackBar.open(messageError, 'Помилка');
          reject(messageError);
        } else {
          imageLoader.form.get('photo').setValue(firstFile);
          imageLoader.formFile.selectedName = firstFile.name;
          resolve(firstFile);
        }
      }

    });
  }

  readFile(file): Promise<any> {
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

  loadSource(formFile: FormFile, file: File) {
    this.readFile(file)
      .then((result) => {
        formFile.src = result;
      })
      .catch(() => {
        this.snackBar.open(environment.errors['2'], environment.errors['1']);
      });
  }

}
