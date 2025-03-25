import { inject, Injectable, Injector, runInInjectionContext } from '@angular/core'
import { LocationReviewsGQL } from '../../../generated/graphql'
import { map } from 'rxjs'
import { toSignal } from '@angular/core/rxjs-interop'

@Injectable({
  providedIn: 'root',
})
export class LocationReviewsService {
  private readonly locationReviewsGQL = inject(LocationReviewsGQL)
  private readonly injector = inject(Injector)

  // We use type inference. The types are automatically inferred from the generated code
  private getLocationReviewsQuery(id: string) {
    return this.locationReviewsGQL
      .fetch({ id })
      .pipe(map((result) => result.data?.location?.reviewsForLocation))
  }

  getLocationReviews(id: string) {
    return runInInjectionContext(this.injector, () => toSignal(this.getLocationReviewsQuery(id)))
  }
}
