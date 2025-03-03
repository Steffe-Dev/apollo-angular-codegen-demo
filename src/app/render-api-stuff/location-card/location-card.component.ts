import { Component, input, Input } from '@angular/core'
import { Location, LocationsQuery } from '../../generated/graphql'

@Component({
  selector: 'app-location-card',
  templateUrl: './location-card.component.html',
  styleUrl: './location-card.component.scss',
})
export class LocationCardComponent {
  // This is an important problem to solve. The query type can be changed as much as we want, it needs to line up with the service.
  // This is one way to do it.
  location = input<LocationsQuery['locations'][number]>()
}
