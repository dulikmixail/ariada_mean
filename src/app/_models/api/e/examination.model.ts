import {StaticFields} from '../../static-fields';
import {EmployeeModel} from '../e/employee.model';
import {RcRecordsModel} from '../r/rc-records.model';

export class ExaminationModel extends StaticFields {
  title: string;
  report: string;
  use: string;
  date: Date;
  executor: EmployeeModel;
  treatmentProgram: any[];
  records: RcRecordsModel[];
}
