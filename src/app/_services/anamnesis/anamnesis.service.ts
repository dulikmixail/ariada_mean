import {Injectable} from '@angular/core';
import {PhRSubGroupService} from '../api/ph_r_sub_group/ph-r-sub-group.service';

@Injectable({
  providedIn: 'root'
})
export class AnamnesisService {
  anamnesisData: {
    stepOne: string[]
  };

  constructor(private phRSubGroupService: PhRSubGroupService) {
    phRSubGroupService.getAll().subscribe(phRSubGroups => {
      this.anamnesisData.stepOne = phRSubGroups.map(phRSubGroup => {
        return phRSubGroup.title;
      });
    });
  }

  public getAnamnesisData() {
    return this.anamnesisData;
  }
}
