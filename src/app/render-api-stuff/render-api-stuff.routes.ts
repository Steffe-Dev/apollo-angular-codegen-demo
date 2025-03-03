import { Routes } from '@angular/router'
import { RenderApiStuffComponent } from './render-api-stuff.component'

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./render-api-stuff.component').then((c) => c.RenderApiStuffComponent),
  },
  {
    path: ':id',
    loadComponent: () =>
      import('./location-detail/location-detail.component').then((c) => c.LocationDetailComponent),
  },
]
