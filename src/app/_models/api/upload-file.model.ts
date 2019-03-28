export class UploadFileModel {
  file: {
    fieldname: string;
    originalname: string;
    encoding: string;
    mimetype: string;
    id: string;
    filename: string;
    metadata: any;
    bucketName: string;
    chunkSize: number;
    size: number;
    md5: string;
    uploadDate: Date;
    contentType: string;
  };
}
