import { inject, Injectable } from '@angular/core'
import { LocationReviewsGQL } from '../../../generated/graphql'
import { map } from 'rxjs'

@Injectable({
  providedIn: 'root',
})
export class LocationReviewsService {
  private locationReviewsGQL = inject(LocationReviewsGQL)

  // We use type inference. The types are automatically inferred from the generated code
  getLocationReviews(id: string) {
    return this.locationReviewsGQL
      .fetch({ id })
      .pipe(map((result) => result.data?.location?.reviewsForLocation))
  }
}
