import { TestBed } from '@angular/core/testing';

import { ReviewsOverviewService } from './reviews-overview.service';

describe('ReviewsOverviewService', () => {
  let service: ReviewsOverviewService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReviewsOverviewService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
