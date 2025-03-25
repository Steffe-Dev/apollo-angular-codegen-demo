import { inject, Injectable, Injector, runInInjectionContext } from '@angular/core'
import {
  LocationDetailsGQL,
  LocationDetailsQuery,
  LocationDetailsQueryVariables,
  LocationPlaceholderGQL,
  LocationReviewsGQL,
} from '../../generated/graphql'
import { map } from 'rxjs'
import { Apollo } from 'apollo-angular'
import { toSignal } from '@angular/core/rxjs-interop'

@Injectable({
  providedIn: 'root',
})
export class LocationDetailService {
  private readonly locationDetailsGQL = inject(LocationDetailsGQL)
  private readonly locationPlaceholderGQL = inject(LocationPlaceholderGQL)
  private readonly locationReviewsGQL = inject(LocationReviewsGQL)
  private readonly apollo = inject(Apollo)
  private readonly injector = inject(Injector)

  // We use type inference. The types are automatically inferred from the generated code
  // ! Show how the partial data is used to render the component using slow network
  private getLocationDetailsByIdQuery(id: string) {
    return this.apollo
      .watchQuery<LocationDetailsQuery, LocationDetailsQueryVariables>({
        query: this.locationDetailsGQL.document,
        variables: { id },
        returnPartialData: true,
      })
      .valueChanges.pipe(map((result) => result.data?.location))
  }

  getLocationDetailsById(id: string) {
    return runInInjectionContext(this.injector, () =>
      toSignal(this.getLocationDetailsByIdQuery(id)),
    )
  }

  // ! This only emits once the query is executed, so the count will be hidden until the query is executed
  private getLocationReviewsCountLazyQuery(id: string) {
    return this.locationReviewsGQL
      .watch({ id }, { fetchPolicy: 'cache-only' })
      .valueChanges.pipe(map((result) => result.data?.location?.reviewsForLocation?.length))
  }

  getLocationReviewsCountLazy(id: string) {
    return runInInjectionContext(this.injector, () =>
      toSignal(this.getLocationReviewsCountLazyQuery(id)),
    )
  }

  private getLocationPlaceholderQuery(id: string) {
    return this.locationPlaceholderGQL
      .fetch({ id }, { fetchPolicy: 'cache-only' })
      .pipe(map((result) => result.data?.location))
  }

  getLocationPlaceholder(id: string) {
    return runInInjectionContext(this.injector, () =>
      toSignal(this.getLocationPlaceholderQuery(id)),
    )
  }
}
