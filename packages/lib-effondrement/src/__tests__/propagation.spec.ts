import { describe, expect, test } from 'vitest'
import { PropagateurSolution } from '../propager'
import { Regle } from '../regle'
import { Solution } from '../solution'
import { Superposition } from '../superposition'

class RegleMultipleDuPremier extends Regle<number, (number | undefined)[]> {
  visit(
    superposition: Superposition<number, (number | undefined)[]>,
  ): number[] {
    return superposition.solutions.filter(
      (solution) => solution % superposition.contexte[0]! === 0,
    )
  }
}

class PropagateurMultipleDuPremier extends PropagateurSolution<
  number,
  (number | undefined)[]
> {}

describe('Propager', () => {
  test('doit propager les solutions possibles sur la règle les nombres doivent être un multiple du premier de la liste', () => {
    class MultipleDuPremier extends Solution<number, (number | undefined)[]> {
      constructor() {
        const contexte = [3, undefined, undefined, undefined]
        super(
          [
            new Superposition([3], contexte),
            new Superposition([1, 2, 4, 6], contexte),
            new Superposition([3, 4, 5, 6, 9], contexte),
            new Superposition([4, 5, 7], contexte),
          ],
          [3, undefined, undefined, undefined],
        )
      }

      setContexte() {
        this.contexte = this.valeurs.map((superposition) =>
          superposition.solutions.length === 1
            ? superposition.solutions[0]
            : undefined,
        )
      }
    }
    const multipleDuPremier = new MultipleDuPremier()

    const propagateurSolutions = new PropagateurMultipleDuPremier([
      new RegleMultipleDuPremier(),
    ])

    const meilleuresSolutions = multipleDuPremier.accept(propagateurSolutions)

    const nouveauContexte = [3, 6, undefined, undefined]
    expect(meilleuresSolutions).toEqual([
      new Superposition([3], nouveauContexte),
      new Superposition([6], nouveauContexte),
      new Superposition([3, 6, 9], nouveauContexte),
      new Superposition([], nouveauContexte),
    ])
  })

  test('doit avoir les règles du multiple de nombre et être strictement croissant', () => {
    class MultipleDuPremierCroissant extends Solution<
      number,
      (number | undefined)[]
    > {
      constructor() {
        const contexte = [3, undefined, undefined, undefined]
        super(
          [
            new Superposition([3], contexte, () => undefined),
            new Superposition([1, 2, 4, 6], contexte, () => this.contexte[0]),
            new Superposition(
              [3, 4, 5, 6, 9],
              contexte,
              () => this.contexte[1],
            ),
            new Superposition([4, 5, 7], contexte, () => this.contexte[2]),
          ],
          [3, undefined, undefined, undefined],
        )
      }

      setContexte() {
        this.contexte = this.valeurs.map((superposition) =>
          superposition.solutions.length === 1
            ? superposition.solutions[0]
            : undefined,
        )
      }
    }
    const multipleDuPremier = new MultipleDuPremierCroissant()

    class StrictementSuperieur extends Regle<number, (number | undefined)[]> {
      visit(
        superposition: Superposition<number, (number | undefined)[]>,
        valeurPrecedente: () => number | undefined,
      ): number[] {
        return superposition.solutions.filter(
          (solution) => solution > (valeurPrecedente() ?? 0),
        )
      }
    }

    const propagateurSolutions = new PropagateurMultipleDuPremier([
      new RegleMultipleDuPremier(),
      new StrictementSuperieur(),
    ])

    multipleDuPremier.valeurs = multipleDuPremier.accept(propagateurSolutions)
    const meilleuresSolutions = multipleDuPremier.accept(propagateurSolutions)

    const nouveauContexte = [3, 6, 9, undefined]
    expect(meilleuresSolutions).toEqual([
      new Superposition([3], nouveauContexte),
      new Superposition([6], nouveauContexte),
      new Superposition([9], nouveauContexte),
      new Superposition([], nouveauContexte),
    ])
  })
})
