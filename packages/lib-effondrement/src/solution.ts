import VisiteurSolution from './visiteurSolution'

export abstract class Solution {
  accept<T>(visiteur: VisiteurSolution<Solution, T>) {
    return visiteur.visit(this)
  }
}
