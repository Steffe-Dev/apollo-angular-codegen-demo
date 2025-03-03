import { inject, Injectable } from '@angular/core'
import {
  LocationDetailsGQL,
  LocationDetailsQuery,
  LocationDetailsQueryVariables,
  LocationPlaceholderGQL,
  LocationReviewsGQL,
} from '../../generated/graphql'
import { map } from 'rxjs'
import { Apollo } from 'apollo-angular'

@Injectable({
  providedIn: 'root',
})
export class LocationDetailService {
  private locationDetailsGQL = inject(LocationDetailsGQL)
  private locationPlaceholderGQL = inject(LocationPlaceholderGQL)
  private locationReviewsGQL = inject(LocationReviewsGQL)

  constructor(private apollo: Apollo) {}

  // We use type inference. The types are automatically inferred from the generated code
  // ! Show how the partial data is used to render the component using slow network
  getLocationDetailsById(id: string) {
    return this.apollo
      .watchQuery<LocationDetailsQuery, LocationDetailsQueryVariables>({
        query: this.locationDetailsGQL.document,
        variables: { id },
        returnPartialData: true,
      })
      .valueChanges.pipe(map((result) => result.data?.location))
  }

  // ! This only emits once the query is executed, so the count will be hidden until the query is executed
  getLocationReviewsCountLazy(id: string) {
    return this.locationReviewsGQL
      .watch({ id }, { fetchPolicy: 'cache-only' })
      .valueChanges.pipe(map((result) => result.data?.location?.reviewsForLocation?.length))
  }

  getLocationPlaceholder(id: string) {
    return this.locationPlaceholderGQL
      .fetch({ id }, { fetchPolicy: 'cache-only' })
      .pipe(map((result) => result.data?.location))
  }
}
