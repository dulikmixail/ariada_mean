import {StaticFields} from '../static-fields';
import {EmployeeModel} from './employee.model';
import {RcRecordsModel} from './rc-records.model';

export class ExaminationModel extends StaticFields {
  title: string;
  report: string;
  use: string;
  date: Date;
  executor: EmployeeModel;
  treatmentProgram: any[];
  records: RcRecordsModel[];
}
