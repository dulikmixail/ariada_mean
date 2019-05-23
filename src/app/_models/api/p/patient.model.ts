import {GenderModel} from '../g/gender.model';
import {StaticFields} from '../../static-fields';

export class PatientModel extends StaticFields {
  surname: string;
  name: string;
  middleName: string;
  birthDate: Date;
  permanentResidence: string;
  addressOfRelativesAndFamily: string;
  phoneNumbers: string[];
  medicalCardNumber: string;
  workplace: string;
  workPost: string;
  isDelete: boolean;
  gender: GenderModel;
  photo: any;

  constructor() {
    super();
    this.phoneNumbers = [];
  }
}
