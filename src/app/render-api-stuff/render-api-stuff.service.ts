import { Injectable, inject } from '@angular/core'
import { LocationsGQL } from '../generated/graphql'
import { map } from 'rxjs'

@Injectable({
  providedIn: 'root',
})
export class RenderApiStuffService {
  private locationsGQL = inject(LocationsGQL)

  // We use type inference. The types are automatically inferred from the generated code
  get locations$() {
    return this.locationsGQL.fetch().pipe(map((result) => result.data?.locations))
  }
}
