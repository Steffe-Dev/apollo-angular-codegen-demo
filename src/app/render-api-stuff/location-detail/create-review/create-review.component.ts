import { Component, DestroyRef, inject, input, signal } from '@angular/core'
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms'
import { LocationReviewInput } from '../../../generated/graphql'
import { FormControlInterface } from '../../../shared/utility/types'
import { CreateReviewService } from './create-review.service'
import { CommonModule } from '@angular/common'
import { of, iif, switchMap, defer, delay, tap } from 'rxjs'
import { takeUntilDestroyed } from '@angular/core/rxjs-interop'

type LocationReviewInputForm = FormControlInterface<Omit<LocationReviewInput, 'locationId'>>

@Component({
  selector: 'app-create-review',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './create-review.component.html',
  styleUrl: './create-review.component.scss',
})
export class CreateReviewComponent {
  private readonly createReviewService = inject(CreateReviewService)
  locationId = input<string>('')
  submitted = signal(false)
  submitResult = signal<{ success: boolean; message: string } | null>(null)

  form = new FormGroup<LocationReviewInputForm>({
    comment: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
    rating: new FormControl(5, {
      nonNullable: true,
      validators: [Validators.required, Validators.min(1), Validators.max(5)],
    }),
  })

  constructor(private destroyRef: DestroyRef) {}

  onSubmit(): void {
    this.submitted.set(true)
    if (this.form.valid) {
      this.createReviewService
        .submitReview({ ...this.form.getRawValue(), locationId: this.locationId() })
        .pipe(
          takeUntilDestroyed(this.destroyRef),
          tap(() => this.submitted.set(false)),
          tap(() => this.form.reset()),
          switchMap((success) =>
            iif(
              () => success,
              defer(() => of({ success: true, message: 'Review submitted' })),
              defer(() =>
                of({ success: false, message: 'Review not submitted, please try again' }),
              ),
            ),
          ),
          switchMap((message) =>
            of(message).pipe(
              tap((message) => this.submitResult.set(message)),
              delay(3000),
              tap(() => this.submitResult.set(null)),
            ),
          ),
        )
        .subscribe()
    }
  }
}
