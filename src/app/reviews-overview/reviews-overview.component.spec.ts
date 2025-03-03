import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewsOverviewComponent } from './reviews-overview.component';

describe('ReviewsOverviewComponent', () => {
  let component: ReviewsOverviewComponent;
  let fixture: ComponentFixture<ReviewsOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReviewsOverviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReviewsOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
