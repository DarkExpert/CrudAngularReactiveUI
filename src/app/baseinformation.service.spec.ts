import { TestBed } from '@angular/core/testing';

import { BaseinformationService } from './baseinformation.service';

describe('BaseinformationService', () => {
  let service: BaseinformationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BaseinformationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
