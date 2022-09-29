import { TestBed } from '@angular/core/testing';

import { CSservicesService } from './csservices.service';

describe('CSservicesService', () => {
  let service: CSservicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CSservicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
