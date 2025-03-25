import { Injectable, inject } from '@angular/core'
import { LocationsGQL } from '../generated/graphql'
import { map } from 'rxjs'
import { toSignal } from '@angular/core/rxjs-interop'

@Injectable({
  providedIn: 'root',
})
export class RenderApiStuffService {
  private readonly locationsGQL = inject(LocationsGQL)

  // We use type inference. The types are automatically inferred from the generated code
  private get locations$() {
    return this.locationsGQL.fetch().pipe(map((result) => result.data?.locations))
  }

  // ! Getters run in an injection context, so we can use toSignal
  get locations() {
    return toSignal(this.locations$)
  }
}
