import {StaticFields} from '../static-fields';
import {PatientModel} from './patient.model';

export class ReviewsModel extends StaticFields {
  comment: string;
  mark: number;
  patient: PatientModel;
}

