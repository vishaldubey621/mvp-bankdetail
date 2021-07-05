import { TestBed } from '@angular/core/testing';

import { BankdetailPresentService } from './bankdetail-present.service';

describe('BankdetailPresentService', () => {
  let service: BankdetailPresentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BankdetailPresentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
