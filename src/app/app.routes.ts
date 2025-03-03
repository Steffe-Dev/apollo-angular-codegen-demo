import { Routes } from '@angular/router'

export const routes: Routes = [
  {
    path: 'api-stuff',
    loadChildren: () => import('./render-api-stuff/render-api-stuff.routes').then((m) => m.routes),
  },
  {
    path: 'reviews',
    loadComponent: () =>
      import('./reviews-overview/reviews-overview.component').then(
        (m) => m.ReviewsOverviewComponent,
      ),
  },
  {
    path: '**',
    redirectTo: 'api-stuff',
  },
]
