import {TitleModel} from './title.model';
import {BedModel} from './bed.model';

export class ChamberModel extends TitleModel {
  beds: BedModel[];
}
