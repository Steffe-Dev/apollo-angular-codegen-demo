import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationReviewsCardComponent } from './location-reviews-card.component';

describe('LocationReviewsCardComponent', () => {
  let component: LocationReviewsCardComponent;
  let fixture: ComponentFixture<LocationReviewsCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LocationReviewsCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LocationReviewsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
