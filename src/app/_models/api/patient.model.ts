import {StaticFields} from '../static-fields';
import {GenderModel} from './gender.model';

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
}

// surname: {
// },
// name: {
// },
// middleName: {
// },
// birthDate:
// permanentResidence:
// addressOfRelativesAndFamily:
// phoneNumbers: {
// },
// medicalCardNumber:
// workplace:
// workPost:
// isDeexport classe:
// gender: {        ref: 'Gender',
//
// },
// login: {
// },
// password: {        select: false,
//
// }
