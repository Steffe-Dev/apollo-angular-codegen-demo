import { FormControl } from '@angular/forms'
import { FormGroup } from '@angular/forms'

export type FormControlInterface<T> = {
  [K in keyof T]: T[K] extends object ? FormGroup<FormControlInterface<T[K]>> : FormControl<T[K]>
}
