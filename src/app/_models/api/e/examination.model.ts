import {EmployeeModel, RcRecordsModel, StaticFields} from '../..';

export class ExaminationModel extends StaticFields {
  title: string;
  report: string;
  use: string;
  date: Date;
  executor: EmployeeModel;
  treatmentProgram: any[];
  records: RcRecordsModel[];
}
