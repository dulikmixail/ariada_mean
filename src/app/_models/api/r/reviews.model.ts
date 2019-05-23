import {PatientModel, StaticFields} from '../..';

export class ReviewsModel extends StaticFields {
  comment: string;
  mark: number;
  patient: PatientModel;
}

