import {StaticFields} from '../static-fields';

export class FileModel extends StaticFields {
  length: number;
  chunkSize: number;
  uploadDate: Date;
  filename: string;
  md5: string;
  contentType: string;
}
