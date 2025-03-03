import { TestBed } from '@angular/core/testing';

import { LocationReviewsService } from './location-reviews.service';

describe('LocationReviewsService', () => {
  let service: LocationReviewsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LocationReviewsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
