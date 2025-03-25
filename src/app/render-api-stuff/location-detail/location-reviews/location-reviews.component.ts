import { Component, inject, Input } from '@angular/core'
import { LocationReviewsService } from './location-reviews.service'
import { LocationReviewsCardComponent } from '../../../shared/location-reviews-card/location-reviews-card.component'

@Component({
  selector: 'app-location-reviews',
  imports: [LocationReviewsCardComponent],
  templateUrl: './location-reviews.component.html',
  styleUrl: './location-reviews.component.scss',
})
export class LocationReviewsComponent {
  private readonly locationReviewsService = inject(LocationReviewsService)
  @Input() set locationId(locationId: string) {
    this.locationReviews = this.locationReviewsService.getLocationReviews(locationId)
  }
  // Using the return type of the service method to avoid having to keep the type in sync
  // The service is the source of truth for the type
  locationReviews!: ReturnType<typeof this.locationReviewsService.getLocationReviews>
}
