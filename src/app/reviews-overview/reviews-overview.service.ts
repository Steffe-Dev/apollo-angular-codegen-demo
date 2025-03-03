import { inject, Injectable } from '@angular/core'
import { LatestReviewsGQL } from '../generated/graphql'
import { map } from 'rxjs'
@Injectable({
  providedIn: 'root',
})
export class ReviewsOverviewService {
  private readonly latestReviewsGQL = inject(LatestReviewsGQL)

  // ! Can use polling as a way to simulate a real-time stream of data
  getLatestReviews() {
    return this.latestReviewsGQL
      .watch(
        {},
        {
          pollInterval: 10000,
        },
      )
      .valueChanges.pipe(map((result) => result.data?.latestReviews))
  }
}
