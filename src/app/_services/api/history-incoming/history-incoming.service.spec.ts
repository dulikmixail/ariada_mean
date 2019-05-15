import { TestBed } from '@angular/core/testing';

import { HistoryIncomingService } from './history-incoming.service';

describe('HistoryIncomingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HistoryIncomingService = TestBed.get(HistoryIncomingService);
    expect(service).toBeTruthy();
  });
});
