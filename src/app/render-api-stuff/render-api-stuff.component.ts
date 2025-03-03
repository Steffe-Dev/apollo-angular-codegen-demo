import { Component, inject } from '@angular/core'
import { RenderApiStuffService } from './render-api-stuff.service'
import { AsyncPipe } from '@angular/common'
import { LocationCardComponent } from './location-card/location-card.component'
import { RouterLink } from '@angular/router'

@Component({
  selector: 'app-render-api-stuff',
  standalone: true,
  imports: [AsyncPipe, LocationCardComponent, RouterLink],
  templateUrl: './render-api-stuff.component.html',
  styleUrl: './render-api-stuff.component.scss',
})
export class RenderApiStuffComponent {
  private renderApiStuffService = inject(RenderApiStuffService)

  locations$ = this.renderApiStuffService.locations$
}
