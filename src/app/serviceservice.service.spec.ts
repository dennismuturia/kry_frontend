import { TestBed } from '@angular/core/testing';

import { ServiceserviceService } from './serviceservice.service';

describe('ServiceserviceService', () => {
  let service: ServiceserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
