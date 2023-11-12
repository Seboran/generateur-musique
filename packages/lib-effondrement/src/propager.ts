import { Regle } from './regle'
import { Superposition } from './superposition'
import VisiteurSolution from './visiteurSolution'

export abstract class PropagateurSolution<T, U>
  implements VisiteurSolution<Superposition<T, U>[], Superposition<T, U>[]>
{
  constructor(protected regles: Regle<T, U>[]) {}
  visit(solutionSpace: Superposition<T, U>[]): Superposition<T, U>[] {
    return solutionSpace.map((solution) => solution.appliquer(this.regles))
  }
}
