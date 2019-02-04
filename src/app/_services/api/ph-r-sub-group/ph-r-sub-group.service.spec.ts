import { TestBed } from '@angular/core/testing';

import { PhRSubGroupService } from './ph-r-sub-group.service';

describe('PhRSubGroupService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PhRSubGroupService = TestBed.get(PhRSubGroupService);
    expect(service).toBeTruthy();
  });
});
