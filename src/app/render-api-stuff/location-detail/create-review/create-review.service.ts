import { inject, Injectable } from '@angular/core'
import { LocationReviewInput, SubmitReviewGQL } from '../../../generated/graphql'
import { map, of, catchError, Observable } from 'rxjs'

@Injectable({
  providedIn: 'root',
})
export class CreateReviewService {
  private readonly submitReviewMutation = inject(SubmitReviewGQL)

  submitReview(input: LocationReviewInput): Observable<boolean> {
    return this.submitReviewMutation.mutate({ input }).pipe(
      map((result) => !!result.data?.submitReview?.success),
      catchError((error) => {
        console.error('Failed to submit review:', error)
        return of(false)
      }),
    )
  }
}
