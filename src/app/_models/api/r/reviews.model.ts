import {PatientModel} from '../p/patient.model';
import {StaticFields} from '../../static-fields';

export class ReviewsModel extends StaticFields {
  comment: string;
  mark: number;
  patient: PatientModel;
}

