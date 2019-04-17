import {StaticFields} from '../static-fields';
import {HowIncomingModel} from './how-incoming.model';
import {TypeIncomingModel} from './type-incoming.model';
import {ExaminationModel} from './examination.model';
import {PlacementModel} from './placement.model';

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
