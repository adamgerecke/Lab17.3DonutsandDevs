import { TestBed } from '@angular/core/testing';

import { ComputerHOFService } from './computer-hof.service';

describe('ComputerHOFService', () => {
  let service: ComputerHOFService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComputerHOFService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
