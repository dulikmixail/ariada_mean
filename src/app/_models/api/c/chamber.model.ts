import {BedModel} from '../b/bed.model';
import {TitleModel} from '../t/title.model';

export class ChamberModel extends TitleModel {
  beds: BedModel[];
  department: string;
  full: boolean;
}
