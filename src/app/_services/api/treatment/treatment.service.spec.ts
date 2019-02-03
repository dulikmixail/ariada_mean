import { TestBed } from '@angular/core/testing';

import { TreatmentService } from './treatment.service';

describe('TreatmentService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TreatmentService = TestBed.get(TreatmentService);
    expect(service).toBeTruthy();
  });
});
