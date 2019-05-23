import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../../environments/environment';
import {FileModel, UploadFileModel} from '../../../_models';

@Injectable({
  providedIn: 'root'
})
export class FileService {

  private readonly path: string;
  private readonly uploadPath: string;
  private readonly downloadPath: string;

  constructor(private http: HttpClient) {
    this.path = 'files';
    this.uploadPath = 'upload';
    this.downloadPath = 'download';
  }

  getAll(): Observable<FileModel[]> {
    return this.http.get<FileModel[]>(`${environment.apiUrl}/${this.path}`);
  }

  create(uploadFile: FormData): Observable<UploadFileModel> {
    return this.http.post<UploadFileModel>(`${environment.apiUrl}/${this.uploadPath}`, uploadFile);
  }

  get(id: string): Observable<FileModel> {
    return this.http.get<FileModel>(`${environment.apiUrl}/${this.path}/${id}`);
  }

  getByName(fileName: string): Observable<FileModel> {
    return this.http.get<FileModel>(`${environment.apiUrl}/${this.path}/name/${fileName}`);
  }

  downloadByName(fileName: string): Observable<Blob> {
    return this.http.get(`${environment.apiUrl}/${this.downloadPath}/${fileName}`, {responseType: 'blob'});
  }

  update(id: string, model: FileModel): Observable<FileModel> {
    return this.http.put<FileModel>(`${environment.apiUrl}/${this.path}/${id}`, model);
  }


  delete(id: string): Observable<FileModel> {
    return this.http.delete<FileModel>(`${environment.apiUrl}/${this.path}/${id}`);
  }

  deleteByName(fileName): Observable<FileModel> {
    return this.http.delete<FileModel>(`${environment.apiUrl}/${this.path}/name/${fileName}`);
  }
}
