import VisiteurSolution from './visiteurSolution'

export abstract class Solution {
  abstract accept<T>(visiteur: VisiteurSolution<Solution, T>): T
}
