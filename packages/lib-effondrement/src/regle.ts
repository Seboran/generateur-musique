import { Superposition } from './superposition'
import VisiteurSolution from './visiteurSolution'

export abstract class Regle<T, U>
  implements VisiteurSolution<Superposition<T, U>, Superposition<T, U>>
{
  /**
   * Retourn true si la valeur reçue respecte la règle
   * @param superposition
   */
  abstract visit(superposition: Superposition<T, U>): Superposition<T, U>
}
