import {HistoryIncomingModel} from '../h/history-incoming.model';
import {PatientModel} from '../p/patient.model';
import {StaticFields} from '../../static-fields';

export class RehabilitationCardModel extends StaticFields {
  patient: PatientModel;
  historyIncoming: HistoryIncomingModel[];
}
