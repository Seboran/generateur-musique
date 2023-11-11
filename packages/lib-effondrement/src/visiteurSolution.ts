export default interface VisiteurSolution<Solution, ReponseVisiteur> {
  visit(solution: Solution): ReponseVisiteur
}
