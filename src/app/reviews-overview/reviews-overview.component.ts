import { Component, inject } from '@angular/core'
import { ReviewsOverviewService } from './reviews-overview.service'
import { LocationReviewsCardComponent } from '../shared/location-reviews-card/location-reviews-card.component'

@Component({
  selector: 'app-reviews-overview',
  imports: [LocationReviewsCardComponent],
  templateUrl: './reviews-overview.component.html',
  styleUrl: './reviews-overview.component.scss',
})
export class ReviewsOverviewComponent {
  private readonly reviewsOverviewService = inject(ReviewsOverviewService)
  latestReviews = this.reviewsOverviewService.latestReviews
}
