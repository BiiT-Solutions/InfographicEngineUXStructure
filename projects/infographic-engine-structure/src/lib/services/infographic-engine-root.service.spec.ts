import { TestBed } from '@angular/core/testing';

import { InfographicEngineRootService } from './infographic-engine-root.service';

describe('InfographicEngineRootService', () => {
  let service: InfographicEngineRootService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InfographicEngineRootService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
