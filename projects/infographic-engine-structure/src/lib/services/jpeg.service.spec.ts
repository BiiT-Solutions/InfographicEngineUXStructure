import { TestBed } from '@angular/core/testing';

import { JpegService } from './jpeg.service';

describe('JpegService', () => {
  let service: JpegService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JpegService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
