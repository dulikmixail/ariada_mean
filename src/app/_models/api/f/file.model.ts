import {StaticFields} from '../..';

export class FileModel extends StaticFields {
  length: number;
  chunkSize: number;
  uploadDate: Date;
  filename: string;
  md5: string;
  contentType: string;
}
