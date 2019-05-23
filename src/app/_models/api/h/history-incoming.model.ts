import {ExaminationModel} from '../e/examination.model';
import {HowIncomingModel} from '../h/how-incoming.model';
import {PlacementModel} from '../p/placement.model';
import {StaticFields} from '../../static-fields';
import {TypeIncomingModel} from '../t/type-incoming.model';

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
