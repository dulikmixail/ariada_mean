import { TestBed } from '@angular/core/testing';

import { AnamnesisService } from './anamnesis.service';

describe('AnamnesisService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AnamnesisService = TestBed.get(AnamnesisService);
    expect(service).toBeTruthy();
  });
});
