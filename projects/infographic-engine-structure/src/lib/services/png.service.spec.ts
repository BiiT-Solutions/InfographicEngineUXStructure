import { TestBed } from '@angular/core/testing';

import { PngService } from './png.service';

describe('PngService', () => {
  let service: PngService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PngService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
