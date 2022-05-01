import { TestBed } from '@angular/core/testing';

import { UstaadjiService } from './ustaadji.service';

describe('UstaadjiService', () => {
  let service: UstaadjiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UstaadjiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
