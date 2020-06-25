import { TestBed } from '@angular/core/testing';

import { NosterService } from './noster.service';

describe('NosterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NosterService = TestBed.get(NosterService);
    expect(service).toBeTruthy();
  });
});
