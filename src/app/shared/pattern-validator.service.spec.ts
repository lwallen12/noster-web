import { TestBed } from '@angular/core/testing';

import { PatternValidatorService } from './pattern-validator.service';

describe('PatternValidatorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PatternValidatorService = TestBed.get(PatternValidatorService);
    expect(service).toBeTruthy();
  });
});
