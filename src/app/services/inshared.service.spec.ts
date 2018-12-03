import { TestBed, inject } from '@angular/core/testing';

import { InsharedService } from './inshared.service';

describe('InsharedService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InsharedService]
    });
  });

  it('should be created', inject([InsharedService], (service: InsharedService) => {
    expect(service).toBeTruthy();
  }));
});
