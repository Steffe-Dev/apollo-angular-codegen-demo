import { Component, inject, Input } from '@angular/core'
import { LocationDetailService } from './location-detail.service'
import { LocationReviewsComponent } from './location-reviews/location-reviews.component'
import { CreateReviewComponent } from './create-review/create-review.component'

@Component({
  selector: 'app-location-detail',
  imports: [LocationReviewsComponent, CreateReviewComponent],
  templateUrl: './location-detail.component.html',
  styleUrl: './location-detail.component.scss',
})
export class LocationDetailComponent {
  // ! Have to alias number to use in the template
  Number = Number
  private locationDetailService = inject(LocationDetailService)
  // ! Component input binding to route param
  @Input() set id(locationId: string) {
    this.location = this.locationDetailService.getLocationDetailsById(locationId)
    this.locationReviewsCount = this.locationDetailService.getLocationReviewsCountLazy(locationId)
  }
  location!: ReturnType<typeof this.locationDetailService.getLocationDetailsById>
  locationReviewsCount!: ReturnType<typeof this.locationDetailService.getLocationReviewsCountLazy>
}
