import { Superposition } from './superposition'
import VisiteurSolution from './visiteurSolution'

export abstract class Regle<T, U>
  implements VisiteurSolution<Superposition<T, U>, T[]>
{
  /**
   * Retourn la liste des valeurs qui respectent la règle dans la superposition
   * @param superposition
   */
  abstract visit(
    superposition: Superposition<T, U>,
    contextualisation?: any,
  ): T[]
}
