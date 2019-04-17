import {StaticFields} from '../static-fields';
import {PatientModel} from './patient.model';
import {HistoryIncomingModel} from './history-incoming.model';

export class RehabilitationCardModel extends StaticFields {
  patient: PatientModel;
  historyIncoming: HistoryIncomingModel[];
}
