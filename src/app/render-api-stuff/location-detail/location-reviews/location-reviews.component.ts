import { Component, inject, Input } from '@angular/core'
import { AsyncPipe } from '@angular/common'
import { LocationReviewsService } from './location-reviews.service'
import { LocationReviewsCardComponent } from '../../../shared/location-reviews-card/location-reviews-card.component'

@Component({
  selector: 'app-location-reviews',
  imports: [AsyncPipe, LocationReviewsCardComponent],
  templateUrl: './location-reviews.component.html',
  styleUrl: './location-reviews.component.scss',
})
export class LocationReviewsComponent {
  private locationReviewsService = inject(LocationReviewsService)
  @Input() set locationId(locationId: string) {
    this.locationReviews$ = this.locationReviewsService.getLocationReviews(locationId)
  }
  // Using the return type of the service method to avoid having to keep the type in sync
  // The service is the source of truth for the type
  locationReviews$!: ReturnType<typeof this.locationReviewsService.getLocationReviews>
}
