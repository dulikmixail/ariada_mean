import {ExaminationModel, HowIncomingModel, PlacementModel, StaticFields, TypeIncomingModel} from '../..';

export class HistoryIncomingModel extends StaticFields {
  hospitalizationDate: Date;
  senderMedicalFacility: string;
  diagnosis: string;
  finalDiagnosis: string;
  howIncoming: HowIncomingModel;
  issuanceDate: Date;
  typeIncoming: TypeIncomingModel;
  note: string;
  examination: ExaminationModel[];
  placement: PlacementModel[];
}
