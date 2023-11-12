import { test, expect, describe } from 'vitest'
import { genererSolutionProcedurale } from '../generer'
import { Solution } from '../solution'
import { Superposition } from '../superposition'
import { PropagateurSolution } from '../propager'
import { Regle } from '../models/regle'

describe('Génération procédurale', () => {
  test('générer des nombres pairs aléatoirement', () => {
    class SolutionNombresPairs extends Solution<
      number,
      void,
      (number | undefined)[]
    > {
      constructor() {
        super(
          [
            new Superposition([1, 2, 3, 4], () => {}),
            new Superposition([1, 2, 3, 4], () => {}),
            new Superposition([1, 2, 3, 4], () => {}),
            new Superposition([1, 2, 3, 4], () => {}),
          ],
          [undefined, undefined, undefined, undefined],
        )
      }
      setContexte(): void {
        this.contexte = this.valeurs.map((superposition) =>
          superposition.solutions.length === 1
            ? superposition.solutions[0]
            : undefined,
        )
      }
    }
    const solutionNombresPairs = new SolutionNombresPairs()

    class RegleNombrePairs extends Regle<number, void> {
      visit(superposition: Superposition<number, void>): number[] {
        return superposition.solutions.filter((solution) => solution % 2 === 0)
      }
    }

    genererSolutionProcedurale<number, void, (number | undefined)[]>(
      solutionNombresPairs,
      new PropagateurSolution([new RegleNombrePairs()]),
    )

    expect(
      solutionNombresPairs.contexte.every(
        (value) => value !== undefined && !(value % 2),
      ),
      JSON.stringify(solutionNombresPairs.contexte),
    ).toBeTruthy()
  })

  test('générer des nombres pairs croissants aléatoirement', () => {
    class SolutionNombresPairs extends Solution<
      number,
      number | undefined,
      (number | undefined)[]
    > {
      constructor() {
        super(
          [
            new Superposition(
              [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
              () => undefined,
            ),
            new Superposition(
              [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
              () => this.contexte[0],
            ),
            new Superposition(
              [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
              () => this.contexte[1],
            ),
            new Superposition(
              [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
              () => this.contexte[2],
            ),
            new Superposition(
              [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
              () => this.contexte[3],
            ),
            new Superposition(
              [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
              () => this.contexte[4],
            ),
            new Superposition(
              [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
              () => this.contexte[5],
            ),
          ],
          [
            undefined,
            undefined,
            undefined,
            undefined,
            undefined,
            undefined,
            undefined,
          ],
        )
      }
      setContexte(): void {
        this.contexte = this.valeurs.map((superposition) =>
          superposition.solutions.length === 1
            ? superposition.solutions[0]
            : undefined,
        )
      }
    }
    const solutionNombresPairs = new SolutionNombresPairs()

    class RegleNombrePairs extends Regle<number, number | undefined> {
      visit(
        superposition: Superposition<number, number | undefined>,
      ): number[] {
        return superposition.solutions.filter((solution) => solution % 2 === 0)
      }
    }

    class RegleNombreCroissants extends Regle<number, number | undefined> {
      visit(
        superposition: Superposition<number, number | undefined>,
      ): number[] {
        return superposition.solutions.filter(
          (solution) => solution >= (superposition.contextualisation() ?? 0),
        )
      }
    }

    genererSolutionProcedurale(
      solutionNombresPairs,
      new PropagateurSolution([
        new RegleNombrePairs(),
        new RegleNombreCroissants(),
      ]),
    )

    expect(
      solutionNombresPairs.contexte.every(
        (value) => value !== undefined && !(value % 2),
      ),
      JSON.stringify(solutionNombresPairs.contexte),
    ).toBeTruthy()

    expect(
      isTableauCroissant(solutionNombresPairs.contexte),
      JSON.stringify(solutionNombresPairs.contexte),
    ).toBeTruthy()
  })
})

function isTableauCroissant(tableau: (number | undefined)[]): boolean {
  return tableau.every(
    (value, index) =>
      index === 0 ||
      !value ||
      tableau[index - 1] === undefined ||
      value > tableau[index - 1]!,
  )
}
