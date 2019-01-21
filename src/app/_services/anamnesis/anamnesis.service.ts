import {Injectable} from '@angular/core';
import {PhRSubGroupService} from '../api/ph_r_sub_group/ph-r-sub-group.service';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AnamnesisService {
  anamnesisData: any = {};

  constructor(private phRSubGroupService: PhRSubGroupService) {
    this.anamnesisData.stepOne = ['1'];
    console.log('Constructor PhRSubGroupService');
    phRSubGroupService.getAll().pipe(map(phRSubGroups => {
      this.anamnesisData.stepOne = phRSubGroups.map(phRSubGroup => {
        return phRSubGroup.title;
      });
    }));
  }

  public getAnamnesisData() {
    return this.anamnesisData;
  }
}
