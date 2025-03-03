import { Component, input } from '@angular/core'
import { LocationReviewsQuery } from '../../generated/graphql'
import { RouterLink } from '@angular/router'

@Component({
  selector: 'app-location-reviews-card',
  imports: [RouterLink],
  templateUrl: './location-reviews-card.component.html',
  styleUrl: './location-reviews-card.component.scss',
})
export class LocationReviewsCardComponent {
  // @ts-ignore
  // Not sure why this is not working (TS brain is not working)
  review = input<LocationReviewsQuery['location']['reviewsForLocation'][number]>()
}
