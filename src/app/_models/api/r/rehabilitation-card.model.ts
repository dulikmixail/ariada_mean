import {HistoryIncomingModel, PatientModel, StaticFields} from '../..';

export class RehabilitationCardModel extends StaticFields {
  patient: PatientModel;
  historyIncoming: HistoryIncomingModel[];
}
