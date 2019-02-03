import { TestBed } from '@angular/core/testing';

import { CriterionService } from './criterion.service';

describe('CriterionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CriterionService = TestBed.get(CriterionService);
    expect(service).toBeTruthy();
  });
});
