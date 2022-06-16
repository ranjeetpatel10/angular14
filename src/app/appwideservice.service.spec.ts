import { TestBed } from '@angular/core/testing';

import { AppwideserviceService } from './appwideservice.service';

describe('AppwideserviceService', () => {
  let service: AppwideserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppwideserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
