import { Regle } from './regle'
import { Solution } from './solution'

export class PropagateurSolution<T, U> {
  constructor(private regles: Regle<T, U>[]) {}
}
