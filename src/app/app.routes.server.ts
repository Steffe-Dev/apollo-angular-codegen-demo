import { RenderMode, ServerRoute } from '@angular/ssr'

// TODO: figure this out...
export const serverRoutes: ServerRoute[] = [
  {
    path: 'reviews',
    renderMode: RenderMode.Client,
  },
  {
    path: '**',
    renderMode: RenderMode.Prerender,
  },
]
