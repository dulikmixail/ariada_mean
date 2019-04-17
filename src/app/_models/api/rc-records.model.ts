import {StaticFields} from '../static-fields';

export class RcRecordsModel extends StaticFields {
  date: Date;
  program: any[];
  complaints: string[];
  alterLoad: any[];
  beforeLoad: any[];
  afterSomeTime: any[];
  fullRestoreTime: string;
  ECGAfterLoad: string;
  ECGBeforeLoad: string;
  conclusion: string;
  contraindications: any[];
}
