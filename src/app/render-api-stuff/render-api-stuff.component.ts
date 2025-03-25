import { Component, inject } from '@angular/core'
import { RenderApiStuffService } from './render-api-stuff.service'
import { LocationCardComponent } from './location-card/location-card.component'
import { RouterLink } from '@angular/router'

@Component({
  selector: 'app-render-api-stuff',
  standalone: true,
  imports: [LocationCardComponent, RouterLink],
  templateUrl: './render-api-stuff.component.html',
  styleUrl: './render-api-stuff.component.scss',
})
export class RenderApiStuffComponent {
  locations = inject(RenderApiStuffService).locations
}
