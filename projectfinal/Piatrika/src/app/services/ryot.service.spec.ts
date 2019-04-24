import { TestBed } from '@angular/core/testing';

import { RyotService } from './ryot.service';

describe('RyotService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RyotService = TestBed.get(RyotService);
    expect(service).toBeTruthy();
  });
});
