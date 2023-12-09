import { PropagateurSolution } from './propager'
import { Solution } from './solution'
import { Superposition } from './superposition'

/**
 *
 * @param solution
 * @param propagation
 * @returns
 */
export function genererSolutionProcedurale<
  ValeursSuperposition,
  ResultatContextualisation,
  Contexte,
>(
  solution: Solution<ValeursSuperposition, ResultatContextualisation, Contexte>,
  propagation: PropagateurSolution<
    ValeursSuperposition,
    ResultatContextualisation
  >,
): void {
  function isToutesSuperpositionsEffondrees(
    superpositions: Superposition<
      ValeursSuperposition,
      ResultatContextualisation
    >[],
  ): boolean {
    return superpositions.every(
      (superposition) => superposition.solutions.length === 1,
    )
  }

  function effondrerAleatoirementSuperposition(
    superposition: Superposition<
      ValeursSuperposition,
      ResultatContextualisation
    >,
  ): void {
    if (superposition.solutions.length === 0) {
      return
    }
    const indexSolutionAleatoire = Math.floor(
      Math.random() * superposition.solutions.length,
    )
    superposition.solutions = [superposition.solutions[indexSolutionAleatoire]]
  }

  function choisirAleatoirementSuperposition(
    superpositions: Superposition<
      ValeursSuperposition,
      ResultatContextualisation
    >[],
  ): Superposition<ValeursSuperposition, ResultatContextualisation> {
    const superpositionNonEffondrees = superpositions.filter(
      (superposition) => superposition.solutions.length > 1,
    )
    const indexSuperpositionAleatoire = Math.floor(
      Math.random() * superpositionNonEffondrees.length,
    )
    return superpositionNonEffondrees[indexSuperpositionAleatoire]
  }

  while (!isToutesSuperpositionsEffondrees(solution.valeurs)) {
    solution.valeurs = solution.accept(propagation)
    effondrerAleatoirementSuperposition(
      choisirAleatoirementSuperposition(solution.valeurs),
    )
  }
  solution.valeurs = solution.accept(propagation)
}
